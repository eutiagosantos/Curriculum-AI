"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, rememberMe: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você implementaria a lógica de login
        console.log("Login form submitted:", formData)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="absolute top-4 left-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar
                    </Link>
                </Button>
            </div>

            <Card className="w-full max-w-md border-2">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Entrar</CardTitle>
                    <CardDescription className="text-center">Acesse sua conta para utilizar todos os recursos</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="seu@email.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Senha</Label>
                                <Link href="/recuperar-senha" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                            <Label htmlFor="rememberMe" className="text-sm font-normal">
                                Lembrar de mim
                            </Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                        >
                            Entrar
                        </Button>

                        <div className="text-center text-sm">
                            Não possui uma conta?{" "}
                            <Link href="/sign-in" className="text-blue-600 dark:text-blue-400 hover:underline">
                                Criar conta
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}
