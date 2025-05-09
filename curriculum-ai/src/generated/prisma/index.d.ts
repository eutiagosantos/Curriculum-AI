
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Curriculum
 * 
 */
export type Curriculum = $Result.DefaultSelection<Prisma.$CurriculumPayload>
/**
 * Model Analyses
 * 
 */
export type Analyses = $Result.DefaultSelection<Prisma.$AnalysesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curriculum`: Exposes CRUD operations for the **Curriculum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curricula
    * const curricula = await prisma.curriculum.findMany()
    * ```
    */
  get curriculum(): Prisma.CurriculumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyses`: Exposes CRUD operations for the **Analyses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analyses.findMany()
    * ```
    */
  get analyses(): Prisma.AnalysesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Curriculum: 'Curriculum',
    Analyses: 'Analyses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "curriculum" | "analyses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Curriculum: {
        payload: Prisma.$CurriculumPayload<ExtArgs>
        fields: Prisma.CurriculumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurriculumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurriculumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          findFirst: {
            args: Prisma.CurriculumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurriculumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          findMany: {
            args: Prisma.CurriculumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          create: {
            args: Prisma.CurriculumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          createMany: {
            args: Prisma.CurriculumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurriculumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          delete: {
            args: Prisma.CurriculumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          update: {
            args: Prisma.CurriculumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          deleteMany: {
            args: Prisma.CurriculumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurriculumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurriculumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          upsert: {
            args: Prisma.CurriculumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          aggregate: {
            args: Prisma.CurriculumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurriculum>
          }
          groupBy: {
            args: Prisma.CurriculumGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurriculumGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurriculumCountArgs<ExtArgs>
            result: $Utils.Optional<CurriculumCountAggregateOutputType> | number
          }
        }
      }
      Analyses: {
        payload: Prisma.$AnalysesPayload<ExtArgs>
        fields: Prisma.AnalysesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          findFirst: {
            args: Prisma.AnalysesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          findMany: {
            args: Prisma.AnalysesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>[]
          }
          create: {
            args: Prisma.AnalysesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          createMany: {
            args: Prisma.AnalysesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>[]
          }
          delete: {
            args: Prisma.AnalysesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          update: {
            args: Prisma.AnalysesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          deleteMany: {
            args: Prisma.AnalysesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>[]
          }
          upsert: {
            args: Prisma.AnalysesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysesPayload>
          }
          aggregate: {
            args: Prisma.AnalysesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyses>
          }
          groupBy: {
            args: Prisma.AnalysesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysesCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    curriculum?: CurriculumOmit
    analyses?: AnalysesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    curriculums: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculums?: boolean | UserCountOutputTypeCountCurriculumsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCurriculumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurriculumWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    created_at: Date
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    curriculums?: boolean | User$curriculumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculums?: boolean | User$curriculumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      curriculums: Prisma.$CurriculumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculums<T extends User$curriculumsArgs<ExtArgs> = {}>(args?: Subset<T, User$curriculumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.curriculums
   */
  export type User$curriculumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    where?: CurriculumWhereInput
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    cursor?: CurriculumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Curriculum
   */

  export type AggregateCurriculum = {
    _count: CurriculumCountAggregateOutputType | null
    _min: CurriculumMinAggregateOutputType | null
    _max: CurriculumMaxAggregateOutputType | null
  }

  export type CurriculumMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    file_name: string | null
    file_url: string | null
    text_content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurriculumMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    file_name: string | null
    file_url: string | null
    text_content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurriculumCountAggregateOutputType = {
    id: number
    user_id: number
    file_name: number
    file_url: number
    text_content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CurriculumMinAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_url?: true
    text_content?: true
    created_at?: true
    updated_at?: true
  }

  export type CurriculumMaxAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_url?: true
    text_content?: true
    created_at?: true
    updated_at?: true
  }

  export type CurriculumCountAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_url?: true
    text_content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CurriculumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curriculum to aggregate.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curricula
    **/
    _count?: true | CurriculumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurriculumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurriculumMaxAggregateInputType
  }

  export type GetCurriculumAggregateType<T extends CurriculumAggregateArgs> = {
        [P in keyof T & keyof AggregateCurriculum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurriculum[P]>
      : GetScalarType<T[P], AggregateCurriculum[P]>
  }




  export type CurriculumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurriculumWhereInput
    orderBy?: CurriculumOrderByWithAggregationInput | CurriculumOrderByWithAggregationInput[]
    by: CurriculumScalarFieldEnum[] | CurriculumScalarFieldEnum
    having?: CurriculumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurriculumCountAggregateInputType | true
    _min?: CurriculumMinAggregateInputType
    _max?: CurriculumMaxAggregateInputType
  }

  export type CurriculumGroupByOutputType = {
    id: string
    user_id: string
    file_name: string
    file_url: string
    text_content: string
    created_at: Date
    updated_at: Date | null
    _count: CurriculumCountAggregateOutputType | null
    _min: CurriculumMinAggregateOutputType | null
    _max: CurriculumMaxAggregateOutputType | null
  }

  type GetCurriculumGroupByPayload<T extends CurriculumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurriculumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurriculumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurriculumGroupByOutputType[P]>
            : GetScalarType<T[P], CurriculumGroupByOutputType[P]>
        }
      >
    >


  export type CurriculumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_url?: boolean
    text_content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_url?: boolean
    text_content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_url?: boolean
    text_content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectScalar = {
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_url?: boolean
    text_content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CurriculumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "file_name" | "file_url" | "text_content" | "created_at" | "updated_at", ExtArgs["result"]["curriculum"]>
  export type CurriculumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurriculumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurriculumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CurriculumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curriculum"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      file_name: string
      file_url: string
      text_content: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["curriculum"]>
    composites: {}
  }

  type CurriculumGetPayload<S extends boolean | null | undefined | CurriculumDefaultArgs> = $Result.GetResult<Prisma.$CurriculumPayload, S>

  type CurriculumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurriculumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurriculumCountAggregateInputType | true
    }

  export interface CurriculumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curriculum'], meta: { name: 'Curriculum' } }
    /**
     * Find zero or one Curriculum that matches the filter.
     * @param {CurriculumFindUniqueArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurriculumFindUniqueArgs>(args: SelectSubset<T, CurriculumFindUniqueArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curriculum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurriculumFindUniqueOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurriculumFindUniqueOrThrowArgs>(args: SelectSubset<T, CurriculumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindFirstArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurriculumFindFirstArgs>(args?: SelectSubset<T, CurriculumFindFirstArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindFirstOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurriculumFindFirstOrThrowArgs>(args?: SelectSubset<T, CurriculumFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curricula
     * const curricula = await prisma.curriculum.findMany()
     * 
     * // Get first 10 Curricula
     * const curricula = await prisma.curriculum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurriculumFindManyArgs>(args?: SelectSubset<T, CurriculumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curriculum.
     * @param {CurriculumCreateArgs} args - Arguments to create a Curriculum.
     * @example
     * // Create one Curriculum
     * const Curriculum = await prisma.curriculum.create({
     *   data: {
     *     // ... data to create a Curriculum
     *   }
     * })
     * 
     */
    create<T extends CurriculumCreateArgs>(args: SelectSubset<T, CurriculumCreateArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curricula.
     * @param {CurriculumCreateManyArgs} args - Arguments to create many Curricula.
     * @example
     * // Create many Curricula
     * const curriculum = await prisma.curriculum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurriculumCreateManyArgs>(args?: SelectSubset<T, CurriculumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curricula and returns the data saved in the database.
     * @param {CurriculumCreateManyAndReturnArgs} args - Arguments to create many Curricula.
     * @example
     * // Create many Curricula
     * const curriculum = await prisma.curriculum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curricula and only return the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurriculumCreateManyAndReturnArgs>(args?: SelectSubset<T, CurriculumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curriculum.
     * @param {CurriculumDeleteArgs} args - Arguments to delete one Curriculum.
     * @example
     * // Delete one Curriculum
     * const Curriculum = await prisma.curriculum.delete({
     *   where: {
     *     // ... filter to delete one Curriculum
     *   }
     * })
     * 
     */
    delete<T extends CurriculumDeleteArgs>(args: SelectSubset<T, CurriculumDeleteArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curriculum.
     * @param {CurriculumUpdateArgs} args - Arguments to update one Curriculum.
     * @example
     * // Update one Curriculum
     * const curriculum = await prisma.curriculum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurriculumUpdateArgs>(args: SelectSubset<T, CurriculumUpdateArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curricula.
     * @param {CurriculumDeleteManyArgs} args - Arguments to filter Curricula to delete.
     * @example
     * // Delete a few Curricula
     * const { count } = await prisma.curriculum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurriculumDeleteManyArgs>(args?: SelectSubset<T, CurriculumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curricula
     * const curriculum = await prisma.curriculum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurriculumUpdateManyArgs>(args: SelectSubset<T, CurriculumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curricula and returns the data updated in the database.
     * @param {CurriculumUpdateManyAndReturnArgs} args - Arguments to update many Curricula.
     * @example
     * // Update many Curricula
     * const curriculum = await prisma.curriculum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curricula and only return the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurriculumUpdateManyAndReturnArgs>(args: SelectSubset<T, CurriculumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curriculum.
     * @param {CurriculumUpsertArgs} args - Arguments to update or create a Curriculum.
     * @example
     * // Update or create a Curriculum
     * const curriculum = await prisma.curriculum.upsert({
     *   create: {
     *     // ... data to create a Curriculum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curriculum we want to update
     *   }
     * })
     */
    upsert<T extends CurriculumUpsertArgs>(args: SelectSubset<T, CurriculumUpsertArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumCountArgs} args - Arguments to filter Curricula to count.
     * @example
     * // Count the number of Curricula
     * const count = await prisma.curriculum.count({
     *   where: {
     *     // ... the filter for the Curricula we want to count
     *   }
     * })
    **/
    count<T extends CurriculumCountArgs>(
      args?: Subset<T, CurriculumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurriculumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurriculumAggregateArgs>(args: Subset<T, CurriculumAggregateArgs>): Prisma.PrismaPromise<GetCurriculumAggregateType<T>>

    /**
     * Group by Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurriculumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurriculumGroupByArgs['orderBy'] }
        : { orderBy?: CurriculumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurriculumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curriculum model
   */
  readonly fields: CurriculumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curriculum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurriculumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curriculum model
   */
  interface CurriculumFieldRefs {
    readonly id: FieldRef<"Curriculum", 'String'>
    readonly user_id: FieldRef<"Curriculum", 'String'>
    readonly file_name: FieldRef<"Curriculum", 'String'>
    readonly file_url: FieldRef<"Curriculum", 'String'>
    readonly text_content: FieldRef<"Curriculum", 'String'>
    readonly created_at: FieldRef<"Curriculum", 'DateTime'>
    readonly updated_at: FieldRef<"Curriculum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curriculum findUnique
   */
  export type CurriculumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum findUniqueOrThrow
   */
  export type CurriculumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum findFirst
   */
  export type CurriculumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum findFirstOrThrow
   */
  export type CurriculumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum findMany
   */
  export type CurriculumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curricula to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum create
   */
  export type CurriculumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The data needed to create a Curriculum.
     */
    data: XOR<CurriculumCreateInput, CurriculumUncheckedCreateInput>
  }

  /**
   * Curriculum createMany
   */
  export type CurriculumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curricula.
     */
    data: CurriculumCreateManyInput | CurriculumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curriculum createManyAndReturn
   */
  export type CurriculumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * The data used to create many Curricula.
     */
    data: CurriculumCreateManyInput | CurriculumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculum update
   */
  export type CurriculumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The data needed to update a Curriculum.
     */
    data: XOR<CurriculumUpdateInput, CurriculumUncheckedUpdateInput>
    /**
     * Choose, which Curriculum to update.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum updateMany
   */
  export type CurriculumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curricula.
     */
    data: XOR<CurriculumUpdateManyMutationInput, CurriculumUncheckedUpdateManyInput>
    /**
     * Filter which Curricula to update
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to update.
     */
    limit?: number
  }

  /**
   * Curriculum updateManyAndReturn
   */
  export type CurriculumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * The data used to update Curricula.
     */
    data: XOR<CurriculumUpdateManyMutationInput, CurriculumUncheckedUpdateManyInput>
    /**
     * Filter which Curricula to update
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculum upsert
   */
  export type CurriculumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The filter to search for the Curriculum to update in case it exists.
     */
    where: CurriculumWhereUniqueInput
    /**
     * In case the Curriculum found by the `where` argument doesn't exist, create a new Curriculum with this data.
     */
    create: XOR<CurriculumCreateInput, CurriculumUncheckedCreateInput>
    /**
     * In case the Curriculum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurriculumUpdateInput, CurriculumUncheckedUpdateInput>
  }

  /**
   * Curriculum delete
   */
  export type CurriculumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter which Curriculum to delete.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum deleteMany
   */
  export type CurriculumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curricula to delete
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to delete.
     */
    limit?: number
  }

  /**
   * Curriculum without action
   */
  export type CurriculumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
  }


  /**
   * Model Analyses
   */

  export type AggregateAnalyses = {
    _count: AnalysesCountAggregateOutputType | null
    _min: AnalysesMinAggregateOutputType | null
    _max: AnalysesMaxAggregateOutputType | null
  }

  export type AnalysesMinAggregateOutputType = {
    id: string | null
    curriculum_id: string | null
    result: string | null
    feedback: string | null
    created_at: Date | null
  }

  export type AnalysesMaxAggregateOutputType = {
    id: string | null
    curriculum_id: string | null
    result: string | null
    feedback: string | null
    created_at: Date | null
  }

  export type AnalysesCountAggregateOutputType = {
    id: number
    curriculum_id: number
    result: number
    feedback: number
    created_at: number
    _all: number
  }


  export type AnalysesMinAggregateInputType = {
    id?: true
    curriculum_id?: true
    result?: true
    feedback?: true
    created_at?: true
  }

  export type AnalysesMaxAggregateInputType = {
    id?: true
    curriculum_id?: true
    result?: true
    feedback?: true
    created_at?: true
  }

  export type AnalysesCountAggregateInputType = {
    id?: true
    curriculum_id?: true
    result?: true
    feedback?: true
    created_at?: true
    _all?: true
  }

  export type AnalysesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to aggregate.
     */
    where?: AnalysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysesOrderByWithRelationInput | AnalysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalysesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysesMaxAggregateInputType
  }

  export type GetAnalysesAggregateType<T extends AnalysesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyses[P]>
      : GetScalarType<T[P], AggregateAnalyses[P]>
  }




  export type AnalysesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysesWhereInput
    orderBy?: AnalysesOrderByWithAggregationInput | AnalysesOrderByWithAggregationInput[]
    by: AnalysesScalarFieldEnum[] | AnalysesScalarFieldEnum
    having?: AnalysesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysesCountAggregateInputType | true
    _min?: AnalysesMinAggregateInputType
    _max?: AnalysesMaxAggregateInputType
  }

  export type AnalysesGroupByOutputType = {
    id: string
    curriculum_id: string
    result: string
    feedback: string
    created_at: Date
    _count: AnalysesCountAggregateOutputType | null
    _min: AnalysesMinAggregateOutputType | null
    _max: AnalysesMaxAggregateOutputType | null
  }

  type GetAnalysesGroupByPayload<T extends AnalysesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysesGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysesGroupByOutputType[P]>
        }
      >
    >


  export type AnalysesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculum_id?: boolean
    result?: boolean
    feedback?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["analyses"]>

  export type AnalysesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculum_id?: boolean
    result?: boolean
    feedback?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["analyses"]>

  export type AnalysesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculum_id?: boolean
    result?: boolean
    feedback?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["analyses"]>

  export type AnalysesSelectScalar = {
    id?: boolean
    curriculum_id?: boolean
    result?: boolean
    feedback?: boolean
    created_at?: boolean
  }

  export type AnalysesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curriculum_id" | "result" | "feedback" | "created_at", ExtArgs["result"]["analyses"]>

  export type $AnalysesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analyses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      curriculum_id: string
      result: string
      feedback: string
      created_at: Date
    }, ExtArgs["result"]["analyses"]>
    composites: {}
  }

  type AnalysesGetPayload<S extends boolean | null | undefined | AnalysesDefaultArgs> = $Result.GetResult<Prisma.$AnalysesPayload, S>

  type AnalysesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysesCountAggregateInputType | true
    }

  export interface AnalysesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analyses'], meta: { name: 'Analyses' } }
    /**
     * Find zero or one Analyses that matches the filter.
     * @param {AnalysesFindUniqueArgs} args - Arguments to find a Analyses
     * @example
     * // Get one Analyses
     * const analyses = await prisma.analyses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysesFindUniqueArgs>(args: SelectSubset<T, AnalysesFindUniqueArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analyses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysesFindUniqueOrThrowArgs} args - Arguments to find a Analyses
     * @example
     * // Get one Analyses
     * const analyses = await prisma.analyses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysesFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesFindFirstArgs} args - Arguments to find a Analyses
     * @example
     * // Get one Analyses
     * const analyses = await prisma.analyses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysesFindFirstArgs>(args?: SelectSubset<T, AnalysesFindFirstArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesFindFirstOrThrowArgs} args - Arguments to find a Analyses
     * @example
     * // Get one Analyses
     * const analyses = await prisma.analyses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysesFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analyses.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analyses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysesWithIdOnly = await prisma.analyses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysesFindManyArgs>(args?: SelectSubset<T, AnalysesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analyses.
     * @param {AnalysesCreateArgs} args - Arguments to create a Analyses.
     * @example
     * // Create one Analyses
     * const Analyses = await prisma.analyses.create({
     *   data: {
     *     // ... data to create a Analyses
     *   }
     * })
     * 
     */
    create<T extends AnalysesCreateArgs>(args: SelectSubset<T, AnalysesCreateArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyses.
     * @param {AnalysesCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analyses = await prisma.analyses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysesCreateManyArgs>(args?: SelectSubset<T, AnalysesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysesCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analyses = await prisma.analyses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analysesWithIdOnly = await prisma.analyses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysesCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analyses.
     * @param {AnalysesDeleteArgs} args - Arguments to delete one Analyses.
     * @example
     * // Delete one Analyses
     * const Analyses = await prisma.analyses.delete({
     *   where: {
     *     // ... filter to delete one Analyses
     *   }
     * })
     * 
     */
    delete<T extends AnalysesDeleteArgs>(args: SelectSubset<T, AnalysesDeleteArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analyses.
     * @param {AnalysesUpdateArgs} args - Arguments to update one Analyses.
     * @example
     * // Update one Analyses
     * const analyses = await prisma.analyses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysesUpdateArgs>(args: SelectSubset<T, AnalysesUpdateArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyses.
     * @param {AnalysesDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analyses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysesDeleteManyArgs>(args?: SelectSubset<T, AnalysesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analyses = await prisma.analyses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysesUpdateManyArgs>(args: SelectSubset<T, AnalysesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalysesUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analyses = await prisma.analyses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analyses and only return the `id`
     * const analysesWithIdOnly = await prisma.analyses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysesUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analyses.
     * @param {AnalysesUpsertArgs} args - Arguments to update or create a Analyses.
     * @example
     * // Update or create a Analyses
     * const analyses = await prisma.analyses.upsert({
     *   create: {
     *     // ... data to create a Analyses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analyses we want to update
     *   }
     * })
     */
    upsert<T extends AnalysesUpsertArgs>(args: SelectSubset<T, AnalysesUpsertArgs<ExtArgs>>): Prisma__AnalysesClient<$Result.GetResult<Prisma.$AnalysesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analyses.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalysesCountArgs>(
      args?: Subset<T, AnalysesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysesAggregateArgs>(args: Subset<T, AnalysesAggregateArgs>): Prisma.PrismaPromise<GetAnalysesAggregateType<T>>

    /**
     * Group by Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysesGroupByArgs['orderBy'] }
        : { orderBy?: AnalysesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analyses model
   */
  readonly fields: AnalysesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analyses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analyses model
   */
  interface AnalysesFieldRefs {
    readonly id: FieldRef<"Analyses", 'String'>
    readonly curriculum_id: FieldRef<"Analyses", 'String'>
    readonly result: FieldRef<"Analyses", 'String'>
    readonly feedback: FieldRef<"Analyses", 'String'>
    readonly created_at: FieldRef<"Analyses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analyses findUnique
   */
  export type AnalysesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where: AnalysesWhereUniqueInput
  }

  /**
   * Analyses findUniqueOrThrow
   */
  export type AnalysesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where: AnalysesWhereUniqueInput
  }

  /**
   * Analyses findFirst
   */
  export type AnalysesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysesOrderByWithRelationInput | AnalysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysesScalarFieldEnum | AnalysesScalarFieldEnum[]
  }

  /**
   * Analyses findFirstOrThrow
   */
  export type AnalysesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysesOrderByWithRelationInput | AnalysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysesScalarFieldEnum | AnalysesScalarFieldEnum[]
  }

  /**
   * Analyses findMany
   */
  export type AnalysesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysesOrderByWithRelationInput | AnalysesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    distinct?: AnalysesScalarFieldEnum | AnalysesScalarFieldEnum[]
  }

  /**
   * Analyses create
   */
  export type AnalysesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * The data needed to create a Analyses.
     */
    data: XOR<AnalysesCreateInput, AnalysesUncheckedCreateInput>
  }

  /**
   * Analyses createMany
   */
  export type AnalysesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysesCreateManyInput | AnalysesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analyses createManyAndReturn
   */
  export type AnalysesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalysesCreateManyInput | AnalysesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analyses update
   */
  export type AnalysesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * The data needed to update a Analyses.
     */
    data: XOR<AnalysesUpdateInput, AnalysesUncheckedUpdateInput>
    /**
     * Choose, which Analyses to update.
     */
    where: AnalysesWhereUniqueInput
  }

  /**
   * Analyses updateMany
   */
  export type AnalysesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysesUpdateManyMutationInput, AnalysesUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysesWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analyses updateManyAndReturn
   */
  export type AnalysesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysesUpdateManyMutationInput, AnalysesUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysesWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analyses upsert
   */
  export type AnalysesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * The filter to search for the Analyses to update in case it exists.
     */
    where: AnalysesWhereUniqueInput
    /**
     * In case the Analyses found by the `where` argument doesn't exist, create a new Analyses with this data.
     */
    create: XOR<AnalysesCreateInput, AnalysesUncheckedCreateInput>
    /**
     * In case the Analyses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysesUpdateInput, AnalysesUncheckedUpdateInput>
  }

  /**
   * Analyses delete
   */
  export type AnalysesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
    /**
     * Filter which Analyses to delete.
     */
    where: AnalysesWhereUniqueInput
  }

  /**
   * Analyses deleteMany
   */
  export type AnalysesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysesWhereInput
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number
  }

  /**
   * Analyses without action
   */
  export type AnalysesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyses
     */
    select?: AnalysesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyses
     */
    omit?: AnalysesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CurriculumScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    file_name: 'file_name',
    file_url: 'file_url',
    text_content: 'text_content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CurriculumScalarFieldEnum = (typeof CurriculumScalarFieldEnum)[keyof typeof CurriculumScalarFieldEnum]


  export const AnalysesScalarFieldEnum: {
    id: 'id',
    curriculum_id: 'curriculum_id',
    result: 'result',
    feedback: 'feedback',
    created_at: 'created_at'
  };

  export type AnalysesScalarFieldEnum = (typeof AnalysesScalarFieldEnum)[keyof typeof AnalysesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    curriculums?: CurriculumListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    curriculums?: CurriculumOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    curriculums?: CurriculumListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CurriculumWhereInput = {
    AND?: CurriculumWhereInput | CurriculumWhereInput[]
    OR?: CurriculumWhereInput[]
    NOT?: CurriculumWhereInput | CurriculumWhereInput[]
    id?: StringFilter<"Curriculum"> | string
    user_id?: StringFilter<"Curriculum"> | string
    file_name?: StringFilter<"Curriculum"> | string
    file_url?: StringFilter<"Curriculum"> | string
    text_content?: StringFilter<"Curriculum"> | string
    created_at?: DateTimeFilter<"Curriculum"> | Date | string
    updated_at?: DateTimeNullableFilter<"Curriculum"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CurriculumOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    text_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CurriculumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurriculumWhereInput | CurriculumWhereInput[]
    OR?: CurriculumWhereInput[]
    NOT?: CurriculumWhereInput | CurriculumWhereInput[]
    user_id?: StringFilter<"Curriculum"> | string
    file_name?: StringFilter<"Curriculum"> | string
    file_url?: StringFilter<"Curriculum"> | string
    text_content?: StringFilter<"Curriculum"> | string
    created_at?: DateTimeFilter<"Curriculum"> | Date | string
    updated_at?: DateTimeNullableFilter<"Curriculum"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CurriculumOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    text_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CurriculumCountOrderByAggregateInput
    _max?: CurriculumMaxOrderByAggregateInput
    _min?: CurriculumMinOrderByAggregateInput
  }

  export type CurriculumScalarWhereWithAggregatesInput = {
    AND?: CurriculumScalarWhereWithAggregatesInput | CurriculumScalarWhereWithAggregatesInput[]
    OR?: CurriculumScalarWhereWithAggregatesInput[]
    NOT?: CurriculumScalarWhereWithAggregatesInput | CurriculumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Curriculum"> | string
    user_id?: StringWithAggregatesFilter<"Curriculum"> | string
    file_name?: StringWithAggregatesFilter<"Curriculum"> | string
    file_url?: StringWithAggregatesFilter<"Curriculum"> | string
    text_content?: StringWithAggregatesFilter<"Curriculum"> | string
    created_at?: DateTimeWithAggregatesFilter<"Curriculum"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Curriculum"> | Date | string | null
  }

  export type AnalysesWhereInput = {
    AND?: AnalysesWhereInput | AnalysesWhereInput[]
    OR?: AnalysesWhereInput[]
    NOT?: AnalysesWhereInput | AnalysesWhereInput[]
    id?: StringFilter<"Analyses"> | string
    curriculum_id?: StringFilter<"Analyses"> | string
    result?: StringFilter<"Analyses"> | string
    feedback?: StringFilter<"Analyses"> | string
    created_at?: DateTimeFilter<"Analyses"> | Date | string
  }

  export type AnalysesOrderByWithRelationInput = {
    id?: SortOrder
    curriculum_id?: SortOrder
    result?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type AnalysesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysesWhereInput | AnalysesWhereInput[]
    OR?: AnalysesWhereInput[]
    NOT?: AnalysesWhereInput | AnalysesWhereInput[]
    curriculum_id?: StringFilter<"Analyses"> | string
    result?: StringFilter<"Analyses"> | string
    feedback?: StringFilter<"Analyses"> | string
    created_at?: DateTimeFilter<"Analyses"> | Date | string
  }, "id">

  export type AnalysesOrderByWithAggregationInput = {
    id?: SortOrder
    curriculum_id?: SortOrder
    result?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
    _count?: AnalysesCountOrderByAggregateInput
    _max?: AnalysesMaxOrderByAggregateInput
    _min?: AnalysesMinOrderByAggregateInput
  }

  export type AnalysesScalarWhereWithAggregatesInput = {
    AND?: AnalysesScalarWhereWithAggregatesInput | AnalysesScalarWhereWithAggregatesInput[]
    OR?: AnalysesScalarWhereWithAggregatesInput[]
    NOT?: AnalysesScalarWhereWithAggregatesInput | AnalysesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analyses"> | string
    curriculum_id?: StringWithAggregatesFilter<"Analyses"> | string
    result?: StringWithAggregatesFilter<"Analyses"> | string
    feedback?: StringWithAggregatesFilter<"Analyses"> | string
    created_at?: DateTimeWithAggregatesFilter<"Analyses"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    curriculums?: CurriculumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    curriculums?: CurriculumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curriculums?: CurriculumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curriculums?: CurriculumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumCreateInput = {
    id?: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutCurriculumsInput
  }

  export type CurriculumUncheckedCreateInput = {
    id?: string
    user_id: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurriculumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCurriculumsNestedInput
  }

  export type CurriculumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumCreateManyInput = {
    id?: string
    user_id: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurriculumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalysesCreateInput = {
    id?: string
    curriculum_id: string
    result: string
    feedback: string
    created_at?: Date | string
  }

  export type AnalysesUncheckedCreateInput = {
    id?: string
    curriculum_id: string
    result: string
    feedback: string
    created_at?: Date | string
  }

  export type AnalysesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculum_id?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculum_id?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysesCreateManyInput = {
    id?: string
    curriculum_id: string
    result: string
    feedback: string
    created_at?: Date | string
  }

  export type AnalysesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculum_id?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculum_id?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CurriculumListRelationFilter = {
    every?: CurriculumWhereInput
    some?: CurriculumWhereInput
    none?: CurriculumWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CurriculumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CurriculumCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    text_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurriculumMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    text_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurriculumMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    text_content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnalysesCountOrderByAggregateInput = {
    id?: SortOrder
    curriculum_id?: SortOrder
    result?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type AnalysesMaxOrderByAggregateInput = {
    id?: SortOrder
    curriculum_id?: SortOrder
    result?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type AnalysesMinOrderByAggregateInput = {
    id?: SortOrder
    curriculum_id?: SortOrder
    result?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type CurriculumCreateNestedManyWithoutUserInput = {
    create?: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput> | CurriculumCreateWithoutUserInput[] | CurriculumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurriculumCreateOrConnectWithoutUserInput | CurriculumCreateOrConnectWithoutUserInput[]
    createMany?: CurriculumCreateManyUserInputEnvelope
    connect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
  }

  export type CurriculumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput> | CurriculumCreateWithoutUserInput[] | CurriculumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurriculumCreateOrConnectWithoutUserInput | CurriculumCreateOrConnectWithoutUserInput[]
    createMany?: CurriculumCreateManyUserInputEnvelope
    connect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CurriculumUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput> | CurriculumCreateWithoutUserInput[] | CurriculumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurriculumCreateOrConnectWithoutUserInput | CurriculumCreateOrConnectWithoutUserInput[]
    upsert?: CurriculumUpsertWithWhereUniqueWithoutUserInput | CurriculumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurriculumCreateManyUserInputEnvelope
    set?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    disconnect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    delete?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    connect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    update?: CurriculumUpdateWithWhereUniqueWithoutUserInput | CurriculumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurriculumUpdateManyWithWhereWithoutUserInput | CurriculumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurriculumScalarWhereInput | CurriculumScalarWhereInput[]
  }

  export type CurriculumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput> | CurriculumCreateWithoutUserInput[] | CurriculumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurriculumCreateOrConnectWithoutUserInput | CurriculumCreateOrConnectWithoutUserInput[]
    upsert?: CurriculumUpsertWithWhereUniqueWithoutUserInput | CurriculumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurriculumCreateManyUserInputEnvelope
    set?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    disconnect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    delete?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    connect?: CurriculumWhereUniqueInput | CurriculumWhereUniqueInput[]
    update?: CurriculumUpdateWithWhereUniqueWithoutUserInput | CurriculumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurriculumUpdateManyWithWhereWithoutUserInput | CurriculumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurriculumScalarWhereInput | CurriculumScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCurriculumsInput = {
    create?: XOR<UserCreateWithoutCurriculumsInput, UserUncheckedCreateWithoutCurriculumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurriculumsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCurriculumsNestedInput = {
    create?: XOR<UserCreateWithoutCurriculumsInput, UserUncheckedCreateWithoutCurriculumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurriculumsInput
    upsert?: UserUpsertWithoutCurriculumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurriculumsInput, UserUpdateWithoutCurriculumsInput>, UserUncheckedUpdateWithoutCurriculumsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CurriculumCreateWithoutUserInput = {
    id?: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurriculumUncheckedCreateWithoutUserInput = {
    id?: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurriculumCreateOrConnectWithoutUserInput = {
    where: CurriculumWhereUniqueInput
    create: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput>
  }

  export type CurriculumCreateManyUserInputEnvelope = {
    data: CurriculumCreateManyUserInput | CurriculumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CurriculumUpsertWithWhereUniqueWithoutUserInput = {
    where: CurriculumWhereUniqueInput
    update: XOR<CurriculumUpdateWithoutUserInput, CurriculumUncheckedUpdateWithoutUserInput>
    create: XOR<CurriculumCreateWithoutUserInput, CurriculumUncheckedCreateWithoutUserInput>
  }

  export type CurriculumUpdateWithWhereUniqueWithoutUserInput = {
    where: CurriculumWhereUniqueInput
    data: XOR<CurriculumUpdateWithoutUserInput, CurriculumUncheckedUpdateWithoutUserInput>
  }

  export type CurriculumUpdateManyWithWhereWithoutUserInput = {
    where: CurriculumScalarWhereInput
    data: XOR<CurriculumUpdateManyMutationInput, CurriculumUncheckedUpdateManyWithoutUserInput>
  }

  export type CurriculumScalarWhereInput = {
    AND?: CurriculumScalarWhereInput | CurriculumScalarWhereInput[]
    OR?: CurriculumScalarWhereInput[]
    NOT?: CurriculumScalarWhereInput | CurriculumScalarWhereInput[]
    id?: StringFilter<"Curriculum"> | string
    user_id?: StringFilter<"Curriculum"> | string
    file_name?: StringFilter<"Curriculum"> | string
    file_url?: StringFilter<"Curriculum"> | string
    text_content?: StringFilter<"Curriculum"> | string
    created_at?: DateTimeFilter<"Curriculum"> | Date | string
    updated_at?: DateTimeNullableFilter<"Curriculum"> | Date | string | null
  }

  export type UserCreateWithoutCurriculumsInput = {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutCurriculumsInput = {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutCurriculumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurriculumsInput, UserUncheckedCreateWithoutCurriculumsInput>
  }

  export type UserUpsertWithoutCurriculumsInput = {
    update: XOR<UserUpdateWithoutCurriculumsInput, UserUncheckedUpdateWithoutCurriculumsInput>
    create: XOR<UserCreateWithoutCurriculumsInput, UserUncheckedCreateWithoutCurriculumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurriculumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurriculumsInput, UserUncheckedUpdateWithoutCurriculumsInput>
  }

  export type UserUpdateWithoutCurriculumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutCurriculumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumCreateManyUserInput = {
    id?: string
    file_name: string
    file_url: string
    text_content: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurriculumUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurriculumUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    text_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}