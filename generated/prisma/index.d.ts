
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
 * Model FlashcardSet
 * 
 */
export type FlashcardSet = $Result.DefaultSelection<Prisma.$FlashcardSetPayload>
/**
 * Model Flashcard
 * 
 */
export type Flashcard = $Result.DefaultSelection<Prisma.$FlashcardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FlashcardSets
 * const flashcardSets = await prisma.flashcardSet.findMany()
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
   * // Fetch zero or more FlashcardSets
   * const flashcardSets = await prisma.flashcardSet.findMany()
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
   * `prisma.flashcardSet`: Exposes CRUD operations for the **FlashcardSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashcardSets
    * const flashcardSets = await prisma.flashcardSet.findMany()
    * ```
    */
  get flashcardSet(): Prisma.FlashcardSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashcard`: Exposes CRUD operations for the **Flashcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flashcards
    * const flashcards = await prisma.flashcard.findMany()
    * ```
    */
  get flashcard(): Prisma.FlashcardDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    FlashcardSet: 'FlashcardSet',
    Flashcard: 'Flashcard'
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
      modelProps: "flashcardSet" | "flashcard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FlashcardSet: {
        payload: Prisma.$FlashcardSetPayload<ExtArgs>
        fields: Prisma.FlashcardSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          findFirst: {
            args: Prisma.FlashcardSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          findMany: {
            args: Prisma.FlashcardSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>[]
          }
          create: {
            args: Prisma.FlashcardSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          createMany: {
            args: Prisma.FlashcardSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>[]
          }
          delete: {
            args: Prisma.FlashcardSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          update: {
            args: Prisma.FlashcardSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardSetPayload>
          }
          aggregate: {
            args: Prisma.FlashcardSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcardSet>
          }
          groupBy: {
            args: Prisma.FlashcardSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardSetCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardSetCountAggregateOutputType> | number
          }
        }
      }
      Flashcard: {
        payload: Prisma.$FlashcardPayload<ExtArgs>
        fields: Prisma.FlashcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findFirst: {
            args: Prisma.FlashcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findMany: {
            args: Prisma.FlashcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          create: {
            args: Prisma.FlashcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          createMany: {
            args: Prisma.FlashcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          delete: {
            args: Prisma.FlashcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          update: {
            args: Prisma.FlashcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          aggregate: {
            args: Prisma.FlashcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcard>
          }
          groupBy: {
            args: Prisma.FlashcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardCountAggregateOutputType> | number
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
    flashcardSet?: FlashcardSetOmit
    flashcard?: FlashcardOmit
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
   * Count Type FlashcardSetCountOutputType
   */

  export type FlashcardSetCountOutputType = {
    flashcards: number
  }

  export type FlashcardSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcards?: boolean | FlashcardSetCountOutputTypeCountFlashcardsArgs
  }

  // Custom InputTypes
  /**
   * FlashcardSetCountOutputType without action
   */
  export type FlashcardSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSetCountOutputType
     */
    select?: FlashcardSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlashcardSetCountOutputType without action
   */
  export type FlashcardSetCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FlashcardSet
   */

  export type AggregateFlashcardSet = {
    _count: FlashcardSetCountAggregateOutputType | null
    _avg: FlashcardSetAvgAggregateOutputType | null
    _sum: FlashcardSetSumAggregateOutputType | null
    _min: FlashcardSetMinAggregateOutputType | null
    _max: FlashcardSetMaxAggregateOutputType | null
  }

  export type FlashcardSetAvgAggregateOutputType = {
    id: number | null
  }

  export type FlashcardSetSumAggregateOutputType = {
    id: number | null
  }

  export type FlashcardSetMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FlashcardSetMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FlashcardSetCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    _all: number
  }


  export type FlashcardSetAvgAggregateInputType = {
    id?: true
  }

  export type FlashcardSetSumAggregateInputType = {
    id?: true
  }

  export type FlashcardSetMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type FlashcardSetMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type FlashcardSetCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type FlashcardSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashcardSet to aggregate.
     */
    where?: FlashcardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardSets to fetch.
     */
    orderBy?: FlashcardSetOrderByWithRelationInput | FlashcardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashcardSets
    **/
    _count?: true | FlashcardSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashcardSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashcardSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardSetMaxAggregateInputType
  }

  export type GetFlashcardSetAggregateType<T extends FlashcardSetAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcardSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcardSet[P]>
      : GetScalarType<T[P], AggregateFlashcardSet[P]>
  }




  export type FlashcardSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardSetWhereInput
    orderBy?: FlashcardSetOrderByWithAggregationInput | FlashcardSetOrderByWithAggregationInput[]
    by: FlashcardSetScalarFieldEnum[] | FlashcardSetScalarFieldEnum
    having?: FlashcardSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardSetCountAggregateInputType | true
    _avg?: FlashcardSetAvgAggregateInputType
    _sum?: FlashcardSetSumAggregateInputType
    _min?: FlashcardSetMinAggregateInputType
    _max?: FlashcardSetMaxAggregateInputType
  }

  export type FlashcardSetGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    _count: FlashcardSetCountAggregateOutputType | null
    _avg: FlashcardSetAvgAggregateOutputType | null
    _sum: FlashcardSetSumAggregateOutputType | null
    _min: FlashcardSetMinAggregateOutputType | null
    _max: FlashcardSetMaxAggregateOutputType | null
  }

  type GetFlashcardSetGroupByPayload<T extends FlashcardSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardSetGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardSetGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    flashcards?: boolean | FlashcardSet$flashcardsArgs<ExtArgs>
    _count?: boolean | FlashcardSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcardSet"]>

  export type FlashcardSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flashcardSet"]>

  export type FlashcardSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flashcardSet"]>

  export type FlashcardSetSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type FlashcardSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt", ExtArgs["result"]["flashcardSet"]>
  export type FlashcardSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcards?: boolean | FlashcardSet$flashcardsArgs<ExtArgs>
    _count?: boolean | FlashcardSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlashcardSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlashcardSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlashcardSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashcardSet"
    objects: {
      flashcards: Prisma.$FlashcardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["flashcardSet"]>
    composites: {}
  }

  type FlashcardSetGetPayload<S extends boolean | null | undefined | FlashcardSetDefaultArgs> = $Result.GetResult<Prisma.$FlashcardSetPayload, S>

  type FlashcardSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardSetCountAggregateInputType | true
    }

  export interface FlashcardSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashcardSet'], meta: { name: 'FlashcardSet' } }
    /**
     * Find zero or one FlashcardSet that matches the filter.
     * @param {FlashcardSetFindUniqueArgs} args - Arguments to find a FlashcardSet
     * @example
     * // Get one FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardSetFindUniqueArgs>(args: SelectSubset<T, FlashcardSetFindUniqueArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashcardSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardSetFindUniqueOrThrowArgs} args - Arguments to find a FlashcardSet
     * @example
     * // Get one FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardSetFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashcardSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetFindFirstArgs} args - Arguments to find a FlashcardSet
     * @example
     * // Get one FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardSetFindFirstArgs>(args?: SelectSubset<T, FlashcardSetFindFirstArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashcardSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetFindFirstOrThrowArgs} args - Arguments to find a FlashcardSet
     * @example
     * // Get one FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardSetFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashcardSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashcardSets
     * const flashcardSets = await prisma.flashcardSet.findMany()
     * 
     * // Get first 10 FlashcardSets
     * const flashcardSets = await prisma.flashcardSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashcardSetWithIdOnly = await prisma.flashcardSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashcardSetFindManyArgs>(args?: SelectSubset<T, FlashcardSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashcardSet.
     * @param {FlashcardSetCreateArgs} args - Arguments to create a FlashcardSet.
     * @example
     * // Create one FlashcardSet
     * const FlashcardSet = await prisma.flashcardSet.create({
     *   data: {
     *     // ... data to create a FlashcardSet
     *   }
     * })
     * 
     */
    create<T extends FlashcardSetCreateArgs>(args: SelectSubset<T, FlashcardSetCreateArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashcardSets.
     * @param {FlashcardSetCreateManyArgs} args - Arguments to create many FlashcardSets.
     * @example
     * // Create many FlashcardSets
     * const flashcardSet = await prisma.flashcardSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardSetCreateManyArgs>(args?: SelectSubset<T, FlashcardSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashcardSets and returns the data saved in the database.
     * @param {FlashcardSetCreateManyAndReturnArgs} args - Arguments to create many FlashcardSets.
     * @example
     * // Create many FlashcardSets
     * const flashcardSet = await prisma.flashcardSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashcardSets and only return the `id`
     * const flashcardSetWithIdOnly = await prisma.flashcardSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardSetCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashcardSet.
     * @param {FlashcardSetDeleteArgs} args - Arguments to delete one FlashcardSet.
     * @example
     * // Delete one FlashcardSet
     * const FlashcardSet = await prisma.flashcardSet.delete({
     *   where: {
     *     // ... filter to delete one FlashcardSet
     *   }
     * })
     * 
     */
    delete<T extends FlashcardSetDeleteArgs>(args: SelectSubset<T, FlashcardSetDeleteArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashcardSet.
     * @param {FlashcardSetUpdateArgs} args - Arguments to update one FlashcardSet.
     * @example
     * // Update one FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardSetUpdateArgs>(args: SelectSubset<T, FlashcardSetUpdateArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashcardSets.
     * @param {FlashcardSetDeleteManyArgs} args - Arguments to filter FlashcardSets to delete.
     * @example
     * // Delete a few FlashcardSets
     * const { count } = await prisma.flashcardSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardSetDeleteManyArgs>(args?: SelectSubset<T, FlashcardSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashcardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashcardSets
     * const flashcardSet = await prisma.flashcardSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardSetUpdateManyArgs>(args: SelectSubset<T, FlashcardSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashcardSets and returns the data updated in the database.
     * @param {FlashcardSetUpdateManyAndReturnArgs} args - Arguments to update many FlashcardSets.
     * @example
     * // Update many FlashcardSets
     * const flashcardSet = await prisma.flashcardSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashcardSets and only return the `id`
     * const flashcardSetWithIdOnly = await prisma.flashcardSet.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlashcardSetUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashcardSet.
     * @param {FlashcardSetUpsertArgs} args - Arguments to update or create a FlashcardSet.
     * @example
     * // Update or create a FlashcardSet
     * const flashcardSet = await prisma.flashcardSet.upsert({
     *   create: {
     *     // ... data to create a FlashcardSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashcardSet we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardSetUpsertArgs>(args: SelectSubset<T, FlashcardSetUpsertArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashcardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetCountArgs} args - Arguments to filter FlashcardSets to count.
     * @example
     * // Count the number of FlashcardSets
     * const count = await prisma.flashcardSet.count({
     *   where: {
     *     // ... the filter for the FlashcardSets we want to count
     *   }
     * })
    **/
    count<T extends FlashcardSetCountArgs>(
      args?: Subset<T, FlashcardSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashcardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashcardSetAggregateArgs>(args: Subset<T, FlashcardSetAggregateArgs>): Prisma.PrismaPromise<GetFlashcardSetAggregateType<T>>

    /**
     * Group by FlashcardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardSetGroupByArgs} args - Group by arguments.
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
      T extends FlashcardSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardSetGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashcardSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashcardSet model
   */
  readonly fields: FlashcardSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashcardSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flashcards<T extends FlashcardSet$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, FlashcardSet$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlashcardSet model
   */
  interface FlashcardSetFieldRefs {
    readonly id: FieldRef<"FlashcardSet", 'Int'>
    readonly title: FieldRef<"FlashcardSet", 'String'>
    readonly description: FieldRef<"FlashcardSet", 'String'>
    readonly createdAt: FieldRef<"FlashcardSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlashcardSet findUnique
   */
  export type FlashcardSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardSet to fetch.
     */
    where: FlashcardSetWhereUniqueInput
  }

  /**
   * FlashcardSet findUniqueOrThrow
   */
  export type FlashcardSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardSet to fetch.
     */
    where: FlashcardSetWhereUniqueInput
  }

  /**
   * FlashcardSet findFirst
   */
  export type FlashcardSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardSet to fetch.
     */
    where?: FlashcardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardSets to fetch.
     */
    orderBy?: FlashcardSetOrderByWithRelationInput | FlashcardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashcardSets.
     */
    cursor?: FlashcardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashcardSets.
     */
    distinct?: FlashcardSetScalarFieldEnum | FlashcardSetScalarFieldEnum[]
  }

  /**
   * FlashcardSet findFirstOrThrow
   */
  export type FlashcardSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardSet to fetch.
     */
    where?: FlashcardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardSets to fetch.
     */
    orderBy?: FlashcardSetOrderByWithRelationInput | FlashcardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashcardSets.
     */
    cursor?: FlashcardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashcardSets.
     */
    distinct?: FlashcardSetScalarFieldEnum | FlashcardSetScalarFieldEnum[]
  }

  /**
   * FlashcardSet findMany
   */
  export type FlashcardSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardSets to fetch.
     */
    where?: FlashcardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardSets to fetch.
     */
    orderBy?: FlashcardSetOrderByWithRelationInput | FlashcardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashcardSets.
     */
    cursor?: FlashcardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardSets.
     */
    skip?: number
    distinct?: FlashcardSetScalarFieldEnum | FlashcardSetScalarFieldEnum[]
  }

  /**
   * FlashcardSet create
   */
  export type FlashcardSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashcardSet.
     */
    data: XOR<FlashcardSetCreateInput, FlashcardSetUncheckedCreateInput>
  }

  /**
   * FlashcardSet createMany
   */
  export type FlashcardSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashcardSets.
     */
    data: FlashcardSetCreateManyInput | FlashcardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashcardSet createManyAndReturn
   */
  export type FlashcardSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * The data used to create many FlashcardSets.
     */
    data: FlashcardSetCreateManyInput | FlashcardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashcardSet update
   */
  export type FlashcardSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashcardSet.
     */
    data: XOR<FlashcardSetUpdateInput, FlashcardSetUncheckedUpdateInput>
    /**
     * Choose, which FlashcardSet to update.
     */
    where: FlashcardSetWhereUniqueInput
  }

  /**
   * FlashcardSet updateMany
   */
  export type FlashcardSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashcardSets.
     */
    data: XOR<FlashcardSetUpdateManyMutationInput, FlashcardSetUncheckedUpdateManyInput>
    /**
     * Filter which FlashcardSets to update
     */
    where?: FlashcardSetWhereInput
    /**
     * Limit how many FlashcardSets to update.
     */
    limit?: number
  }

  /**
   * FlashcardSet updateManyAndReturn
   */
  export type FlashcardSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * The data used to update FlashcardSets.
     */
    data: XOR<FlashcardSetUpdateManyMutationInput, FlashcardSetUncheckedUpdateManyInput>
    /**
     * Filter which FlashcardSets to update
     */
    where?: FlashcardSetWhereInput
    /**
     * Limit how many FlashcardSets to update.
     */
    limit?: number
  }

  /**
   * FlashcardSet upsert
   */
  export type FlashcardSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashcardSet to update in case it exists.
     */
    where: FlashcardSetWhereUniqueInput
    /**
     * In case the FlashcardSet found by the `where` argument doesn't exist, create a new FlashcardSet with this data.
     */
    create: XOR<FlashcardSetCreateInput, FlashcardSetUncheckedCreateInput>
    /**
     * In case the FlashcardSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardSetUpdateInput, FlashcardSetUncheckedUpdateInput>
  }

  /**
   * FlashcardSet delete
   */
  export type FlashcardSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
    /**
     * Filter which FlashcardSet to delete.
     */
    where: FlashcardSetWhereUniqueInput
  }

  /**
   * FlashcardSet deleteMany
   */
  export type FlashcardSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashcardSets to delete
     */
    where?: FlashcardSetWhereInput
    /**
     * Limit how many FlashcardSets to delete.
     */
    limit?: number
  }

  /**
   * FlashcardSet.flashcards
   */
  export type FlashcardSet$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    cursor?: FlashcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * FlashcardSet without action
   */
  export type FlashcardSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardSet
     */
    select?: FlashcardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardSet
     */
    omit?: FlashcardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardSetInclude<ExtArgs> | null
  }


  /**
   * Model Flashcard
   */

  export type AggregateFlashcard = {
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  export type FlashcardAvgAggregateOutputType = {
    id: number | null
    setId: number | null
  }

  export type FlashcardSumAggregateOutputType = {
    id: number | null
    setId: number | null
  }

  export type FlashcardMinAggregateOutputType = {
    id: number | null
    front: string | null
    back: string | null
    setId: number | null
    createdAt: Date | null
  }

  export type FlashcardMaxAggregateOutputType = {
    id: number | null
    front: string | null
    back: string | null
    setId: number | null
    createdAt: Date | null
  }

  export type FlashcardCountAggregateOutputType = {
    id: number
    front: number
    back: number
    setId: number
    createdAt: number
    _all: number
  }


  export type FlashcardAvgAggregateInputType = {
    id?: true
    setId?: true
  }

  export type FlashcardSumAggregateInputType = {
    id?: true
    setId?: true
  }

  export type FlashcardMinAggregateInputType = {
    id?: true
    front?: true
    back?: true
    setId?: true
    createdAt?: true
  }

  export type FlashcardMaxAggregateInputType = {
    id?: true
    front?: true
    back?: true
    setId?: true
    createdAt?: true
  }

  export type FlashcardCountAggregateInputType = {
    id?: true
    front?: true
    back?: true
    setId?: true
    createdAt?: true
    _all?: true
  }

  export type FlashcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcard to aggregate.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flashcards
    **/
    _count?: true | FlashcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashcardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashcardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardMaxAggregateInputType
  }

  export type GetFlashcardAggregateType<T extends FlashcardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcard[P]>
      : GetScalarType<T[P], AggregateFlashcard[P]>
  }




  export type FlashcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithAggregationInput | FlashcardOrderByWithAggregationInput[]
    by: FlashcardScalarFieldEnum[] | FlashcardScalarFieldEnum
    having?: FlashcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardCountAggregateInputType | true
    _avg?: FlashcardAvgAggregateInputType
    _sum?: FlashcardSumAggregateInputType
    _min?: FlashcardMinAggregateInputType
    _max?: FlashcardMaxAggregateInputType
  }

  export type FlashcardGroupByOutputType = {
    id: number
    front: string
    back: string
    setId: number
    createdAt: Date
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  type GetFlashcardGroupByPayload<T extends FlashcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    front?: boolean
    back?: boolean
    setId?: boolean
    createdAt?: boolean
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    front?: boolean
    back?: boolean
    setId?: boolean
    createdAt?: boolean
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    front?: boolean
    back?: boolean
    setId?: boolean
    createdAt?: boolean
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectScalar = {
    id?: boolean
    front?: boolean
    back?: boolean
    setId?: boolean
    createdAt?: boolean
  }

  export type FlashcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "front" | "back" | "setId" | "createdAt", ExtArgs["result"]["flashcard"]>
  export type FlashcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | FlashcardSetDefaultArgs<ExtArgs>
  }

  export type $FlashcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flashcard"
    objects: {
      set: Prisma.$FlashcardSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      front: string
      back: string
      setId: number
      createdAt: Date
    }, ExtArgs["result"]["flashcard"]>
    composites: {}
  }

  type FlashcardGetPayload<S extends boolean | null | undefined | FlashcardDefaultArgs> = $Result.GetResult<Prisma.$FlashcardPayload, S>

  type FlashcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardCountAggregateInputType | true
    }

  export interface FlashcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flashcard'], meta: { name: 'Flashcard' } }
    /**
     * Find zero or one Flashcard that matches the filter.
     * @param {FlashcardFindUniqueArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardFindUniqueArgs>(args: SelectSubset<T, FlashcardFindUniqueArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flashcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardFindUniqueOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardFindFirstArgs>(args?: SelectSubset<T, FlashcardFindFirstArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flashcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flashcards
     * const flashcards = await prisma.flashcard.findMany()
     * 
     * // Get first 10 Flashcards
     * const flashcards = await prisma.flashcard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashcardFindManyArgs>(args?: SelectSubset<T, FlashcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flashcard.
     * @param {FlashcardCreateArgs} args - Arguments to create a Flashcard.
     * @example
     * // Create one Flashcard
     * const Flashcard = await prisma.flashcard.create({
     *   data: {
     *     // ... data to create a Flashcard
     *   }
     * })
     * 
     */
    create<T extends FlashcardCreateArgs>(args: SelectSubset<T, FlashcardCreateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flashcards.
     * @param {FlashcardCreateManyArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardCreateManyArgs>(args?: SelectSubset<T, FlashcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flashcards and returns the data saved in the database.
     * @param {FlashcardCreateManyAndReturnArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flashcard.
     * @param {FlashcardDeleteArgs} args - Arguments to delete one Flashcard.
     * @example
     * // Delete one Flashcard
     * const Flashcard = await prisma.flashcard.delete({
     *   where: {
     *     // ... filter to delete one Flashcard
     *   }
     * })
     * 
     */
    delete<T extends FlashcardDeleteArgs>(args: SelectSubset<T, FlashcardDeleteArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flashcard.
     * @param {FlashcardUpdateArgs} args - Arguments to update one Flashcard.
     * @example
     * // Update one Flashcard
     * const flashcard = await prisma.flashcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardUpdateArgs>(args: SelectSubset<T, FlashcardUpdateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flashcards.
     * @param {FlashcardDeleteManyArgs} args - Arguments to filter Flashcards to delete.
     * @example
     * // Delete a few Flashcards
     * const { count } = await prisma.flashcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardDeleteManyArgs>(args?: SelectSubset<T, FlashcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardUpdateManyArgs>(args: SelectSubset<T, FlashcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards and returns the data updated in the database.
     * @param {FlashcardUpdateManyAndReturnArgs} args - Arguments to update many Flashcards.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlashcardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flashcard.
     * @param {FlashcardUpsertArgs} args - Arguments to update or create a Flashcard.
     * @example
     * // Update or create a Flashcard
     * const flashcard = await prisma.flashcard.upsert({
     *   create: {
     *     // ... data to create a Flashcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flashcard we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardUpsertArgs>(args: SelectSubset<T, FlashcardUpsertArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardCountArgs} args - Arguments to filter Flashcards to count.
     * @example
     * // Count the number of Flashcards
     * const count = await prisma.flashcard.count({
     *   where: {
     *     // ... the filter for the Flashcards we want to count
     *   }
     * })
    **/
    count<T extends FlashcardCountArgs>(
      args?: Subset<T, FlashcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashcardAggregateArgs>(args: Subset<T, FlashcardAggregateArgs>): Prisma.PrismaPromise<GetFlashcardAggregateType<T>>

    /**
     * Group by Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardGroupByArgs} args - Group by arguments.
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
      T extends FlashcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flashcard model
   */
  readonly fields: FlashcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flashcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    set<T extends FlashcardSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashcardSetDefaultArgs<ExtArgs>>): Prisma__FlashcardSetClient<$Result.GetResult<Prisma.$FlashcardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flashcard model
   */
  interface FlashcardFieldRefs {
    readonly id: FieldRef<"Flashcard", 'Int'>
    readonly front: FieldRef<"Flashcard", 'String'>
    readonly back: FieldRef<"Flashcard", 'String'>
    readonly setId: FieldRef<"Flashcard", 'Int'>
    readonly createdAt: FieldRef<"Flashcard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flashcard findUnique
   */
  export type FlashcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findUniqueOrThrow
   */
  export type FlashcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findFirst
   */
  export type FlashcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findFirstOrThrow
   */
  export type FlashcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findMany
   */
  export type FlashcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcards to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard create
   */
  export type FlashcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to create a Flashcard.
     */
    data: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
  }

  /**
   * Flashcard createMany
   */
  export type FlashcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flashcard createManyAndReturn
   */
  export type FlashcardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard update
   */
  export type FlashcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to update a Flashcard.
     */
    data: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
    /**
     * Choose, which Flashcard to update.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard updateMany
   */
  export type FlashcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
  }

  /**
   * Flashcard updateManyAndReturn
   */
  export type FlashcardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard upsert
   */
  export type FlashcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The filter to search for the Flashcard to update in case it exists.
     */
    where: FlashcardWhereUniqueInput
    /**
     * In case the Flashcard found by the `where` argument doesn't exist, create a new Flashcard with this data.
     */
    create: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
    /**
     * In case the Flashcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
  }

  /**
   * Flashcard delete
   */
  export type FlashcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter which Flashcard to delete.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard deleteMany
   */
  export type FlashcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcards to delete
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to delete.
     */
    limit?: number
  }

  /**
   * Flashcard without action
   */
  export type FlashcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
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


  export const FlashcardSetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type FlashcardSetScalarFieldEnum = (typeof FlashcardSetScalarFieldEnum)[keyof typeof FlashcardSetScalarFieldEnum]


  export const FlashcardScalarFieldEnum: {
    id: 'id',
    front: 'front',
    back: 'back',
    setId: 'setId',
    createdAt: 'createdAt'
  };

  export type FlashcardScalarFieldEnum = (typeof FlashcardScalarFieldEnum)[keyof typeof FlashcardScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FlashcardSetWhereInput = {
    AND?: FlashcardSetWhereInput | FlashcardSetWhereInput[]
    OR?: FlashcardSetWhereInput[]
    NOT?: FlashcardSetWhereInput | FlashcardSetWhereInput[]
    id?: IntFilter<"FlashcardSet"> | number
    title?: StringFilter<"FlashcardSet"> | string
    description?: StringFilter<"FlashcardSet"> | string
    createdAt?: DateTimeFilter<"FlashcardSet"> | Date | string
    flashcards?: FlashcardListRelationFilter
  }

  export type FlashcardSetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    flashcards?: FlashcardOrderByRelationAggregateInput
  }

  export type FlashcardSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlashcardSetWhereInput | FlashcardSetWhereInput[]
    OR?: FlashcardSetWhereInput[]
    NOT?: FlashcardSetWhereInput | FlashcardSetWhereInput[]
    title?: StringFilter<"FlashcardSet"> | string
    description?: StringFilter<"FlashcardSet"> | string
    createdAt?: DateTimeFilter<"FlashcardSet"> | Date | string
    flashcards?: FlashcardListRelationFilter
  }, "id">

  export type FlashcardSetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: FlashcardSetCountOrderByAggregateInput
    _avg?: FlashcardSetAvgOrderByAggregateInput
    _max?: FlashcardSetMaxOrderByAggregateInput
    _min?: FlashcardSetMinOrderByAggregateInput
    _sum?: FlashcardSetSumOrderByAggregateInput
  }

  export type FlashcardSetScalarWhereWithAggregatesInput = {
    AND?: FlashcardSetScalarWhereWithAggregatesInput | FlashcardSetScalarWhereWithAggregatesInput[]
    OR?: FlashcardSetScalarWhereWithAggregatesInput[]
    NOT?: FlashcardSetScalarWhereWithAggregatesInput | FlashcardSetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlashcardSet"> | number
    title?: StringWithAggregatesFilter<"FlashcardSet"> | string
    description?: StringWithAggregatesFilter<"FlashcardSet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlashcardSet"> | Date | string
  }

  export type FlashcardWhereInput = {
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    id?: IntFilter<"Flashcard"> | number
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    setId?: IntFilter<"Flashcard"> | number
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    set?: XOR<FlashcardSetScalarRelationFilter, FlashcardSetWhereInput>
  }

  export type FlashcardOrderByWithRelationInput = {
    id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    setId?: SortOrder
    createdAt?: SortOrder
    set?: FlashcardSetOrderByWithRelationInput
  }

  export type FlashcardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    setId?: IntFilter<"Flashcard"> | number
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    set?: XOR<FlashcardSetScalarRelationFilter, FlashcardSetWhereInput>
  }, "id">

  export type FlashcardOrderByWithAggregationInput = {
    id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    setId?: SortOrder
    createdAt?: SortOrder
    _count?: FlashcardCountOrderByAggregateInput
    _avg?: FlashcardAvgOrderByAggregateInput
    _max?: FlashcardMaxOrderByAggregateInput
    _min?: FlashcardMinOrderByAggregateInput
    _sum?: FlashcardSumOrderByAggregateInput
  }

  export type FlashcardScalarWhereWithAggregatesInput = {
    AND?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    OR?: FlashcardScalarWhereWithAggregatesInput[]
    NOT?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flashcard"> | number
    front?: StringWithAggregatesFilter<"Flashcard"> | string
    back?: StringWithAggregatesFilter<"Flashcard"> | string
    setId?: IntWithAggregatesFilter<"Flashcard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
  }

  export type FlashcardSetCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    flashcards?: FlashcardCreateNestedManyWithoutSetInput
  }

  export type FlashcardSetUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutSetInput
  }

  export type FlashcardSetUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUpdateManyWithoutSetNestedInput
  }

  export type FlashcardSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUncheckedUpdateManyWithoutSetNestedInput
  }

  export type FlashcardSetCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
  }

  export type FlashcardSetUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateInput = {
    front: string
    back: string
    createdAt?: Date | string
    set: FlashcardSetCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashcardUncheckedCreateInput = {
    id?: number
    front: string
    back: string
    setId: number
    createdAt?: Date | string
  }

  export type FlashcardUpdateInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    set?: FlashcardSetUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashcardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    setId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateManyInput = {
    id?: number
    front: string
    back: string
    setId: number
    createdAt?: Date | string
  }

  export type FlashcardUpdateManyMutationInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    setId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type FlashcardListRelationFilter = {
    every?: FlashcardWhereInput
    some?: FlashcardWhereInput
    none?: FlashcardWhereInput
  }

  export type FlashcardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashcardSetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardSetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlashcardSetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardSetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardSetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type FlashcardSetScalarRelationFilter = {
    is?: FlashcardSetWhereInput
    isNot?: FlashcardSetWhereInput
  }

  export type FlashcardCountOrderByAggregateInput = {
    id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    setId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardAvgOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
  }

  export type FlashcardMaxOrderByAggregateInput = {
    id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    setId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardMinOrderByAggregateInput = {
    id?: SortOrder
    front?: SortOrder
    back?: SortOrder
    setId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlashcardSumOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
  }

  export type FlashcardCreateNestedManyWithoutSetInput = {
    create?: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput> | FlashcardCreateWithoutSetInput[] | FlashcardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutSetInput | FlashcardCreateOrConnectWithoutSetInput[]
    createMany?: FlashcardCreateManySetInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type FlashcardUncheckedCreateNestedManyWithoutSetInput = {
    create?: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput> | FlashcardCreateWithoutSetInput[] | FlashcardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutSetInput | FlashcardCreateOrConnectWithoutSetInput[]
    createMany?: FlashcardCreateManySetInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlashcardUpdateManyWithoutSetNestedInput = {
    create?: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput> | FlashcardCreateWithoutSetInput[] | FlashcardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutSetInput | FlashcardCreateOrConnectWithoutSetInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutSetInput | FlashcardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: FlashcardCreateManySetInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutSetInput | FlashcardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutSetInput | FlashcardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlashcardUncheckedUpdateManyWithoutSetNestedInput = {
    create?: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput> | FlashcardCreateWithoutSetInput[] | FlashcardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutSetInput | FlashcardCreateOrConnectWithoutSetInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutSetInput | FlashcardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: FlashcardCreateManySetInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutSetInput | FlashcardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutSetInput | FlashcardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type FlashcardSetCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<FlashcardSetCreateWithoutFlashcardsInput, FlashcardSetUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: FlashcardSetCreateOrConnectWithoutFlashcardsInput
    connect?: FlashcardSetWhereUniqueInput
  }

  export type FlashcardSetUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<FlashcardSetCreateWithoutFlashcardsInput, FlashcardSetUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: FlashcardSetCreateOrConnectWithoutFlashcardsInput
    upsert?: FlashcardSetUpsertWithoutFlashcardsInput
    connect?: FlashcardSetWhereUniqueInput
    update?: XOR<XOR<FlashcardSetUpdateToOneWithWhereWithoutFlashcardsInput, FlashcardSetUpdateWithoutFlashcardsInput>, FlashcardSetUncheckedUpdateWithoutFlashcardsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type FlashcardCreateWithoutSetInput = {
    front: string
    back: string
    createdAt?: Date | string
  }

  export type FlashcardUncheckedCreateWithoutSetInput = {
    id?: number
    front: string
    back: string
    createdAt?: Date | string
  }

  export type FlashcardCreateOrConnectWithoutSetInput = {
    where: FlashcardWhereUniqueInput
    create: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput>
  }

  export type FlashcardCreateManySetInputEnvelope = {
    data: FlashcardCreateManySetInput | FlashcardCreateManySetInput[]
    skipDuplicates?: boolean
  }

  export type FlashcardUpsertWithWhereUniqueWithoutSetInput = {
    where: FlashcardWhereUniqueInput
    update: XOR<FlashcardUpdateWithoutSetInput, FlashcardUncheckedUpdateWithoutSetInput>
    create: XOR<FlashcardCreateWithoutSetInput, FlashcardUncheckedCreateWithoutSetInput>
  }

  export type FlashcardUpdateWithWhereUniqueWithoutSetInput = {
    where: FlashcardWhereUniqueInput
    data: XOR<FlashcardUpdateWithoutSetInput, FlashcardUncheckedUpdateWithoutSetInput>
  }

  export type FlashcardUpdateManyWithWhereWithoutSetInput = {
    where: FlashcardScalarWhereInput
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyWithoutSetInput>
  }

  export type FlashcardScalarWhereInput = {
    AND?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    OR?: FlashcardScalarWhereInput[]
    NOT?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    id?: IntFilter<"Flashcard"> | number
    front?: StringFilter<"Flashcard"> | string
    back?: StringFilter<"Flashcard"> | string
    setId?: IntFilter<"Flashcard"> | number
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
  }

  export type FlashcardSetCreateWithoutFlashcardsInput = {
    title: string
    description: string
    createdAt?: Date | string
  }

  export type FlashcardSetUncheckedCreateWithoutFlashcardsInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
  }

  export type FlashcardSetCreateOrConnectWithoutFlashcardsInput = {
    where: FlashcardSetWhereUniqueInput
    create: XOR<FlashcardSetCreateWithoutFlashcardsInput, FlashcardSetUncheckedCreateWithoutFlashcardsInput>
  }

  export type FlashcardSetUpsertWithoutFlashcardsInput = {
    update: XOR<FlashcardSetUpdateWithoutFlashcardsInput, FlashcardSetUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<FlashcardSetCreateWithoutFlashcardsInput, FlashcardSetUncheckedCreateWithoutFlashcardsInput>
    where?: FlashcardSetWhereInput
  }

  export type FlashcardSetUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: FlashcardSetWhereInput
    data: XOR<FlashcardSetUpdateWithoutFlashcardsInput, FlashcardSetUncheckedUpdateWithoutFlashcardsInput>
  }

  export type FlashcardSetUpdateWithoutFlashcardsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardSetUncheckedUpdateWithoutFlashcardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateManySetInput = {
    id?: number
    front: string
    back: string
    createdAt?: Date | string
  }

  export type FlashcardUpdateWithoutSetInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    front?: StringFieldUpdateOperationsInput | string
    back?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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