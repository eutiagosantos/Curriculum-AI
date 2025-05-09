"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, FileText, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [fileUploaded, setFileUploaded] = useState<File | null>(null)
  const [textInput, setTextInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileType = file.type

      if (
        fileType === "application/pdf" ||
        fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        fileType === "application/msword"
      ) {
        setFileUploaded(file)
        setTextInput("")
      } else {
        alert("Por favor, envie apenas arquivos PDF ou Word (.docx).")
        e.target.value = ""
      }
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value)
    if (e.target.value.trim() !== "") {
      setFileUploaded(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  const isButtonDisabled = !fileUploaded && textInput.trim() === ""

  const handleAnalyze = async () => {
    if (isButtonDisabled) return

    setIsLoading(true)
    try {
      if (fileUploaded) {
        const formData = new FormData()
        formData.append('file', fileUploaded)

        const response = await fetch('http://localhost:3000/postfile', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error('Erro ao enviar arquivo')
        }

        const data = await response.text()
        console.log('Arquivo processado:', data)
      } else if (textInput.trim()) {
        // Aqui você pode adicionar a lógica para processar o texto
        console.log('Processando texto:', textInput)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Ocorreu um erro ao processar seu currículo. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 right-0 p-4">
        <Button
          variant="ghost"
          className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          asChild
        >
          <a href="/sign-in">Criar Conta</a>
        </Button>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3">CurriculumAI</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Avalie e melhore seu currículo com inteligência artificial
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 hover:border-blue-200 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Upload className="h-5 w-5" />
                Analisar Currículo
              </CardTitle>
              <CardDescription>Faça upload do seu currículo em formato PDF ou Word</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${fileUploaded
                  ? "bg-blue-50 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700"
                  : "border-gray-300 hover:border-blue-300 dark:border-gray-700"
                  }`}
                onClick={() => fileInputRef.current?.click()}
              >
                {fileUploaded ? (
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="h-12 w-12 text-blue-500" />
                    <p className="font-medium text-gray-800 dark:text-gray-200">{fileUploaded.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Clique para alterar o arquivo</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <p className="font-medium text-gray-800 dark:text-gray-200">Arraste e solte seu arquivo aqui</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ou clique para selecionar um arquivo</p>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <FileText className="h-5 w-5" />
                Colar Texto
              </CardTitle>
              <CardDescription>Cole o conteúdo do seu currículo diretamente</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Cole o texto do seu currículo aqui..."
                className="min-h-[200px] resize-none"
                value={textInput}
                onChange={handleTextChange}
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="px-8 py-6 text-lg gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            disabled={isButtonDisabled || isLoading}
            onClick={handleAnalyze}
          >
            {isLoading ? 'Processando...' : 'Analisar Agora'}
            {!isLoading && <ArrowRight className="h-5 w-5" />}
          </Button>

          {isButtonDisabled && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              Forneça seu currículo para continuar
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
