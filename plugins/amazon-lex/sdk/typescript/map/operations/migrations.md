<!-- Generated file — do not edit; regenerated with the SDK. -->

# Migrations — operations

Accessor: `client.migrations` · Source: `src/resources/migrations.ts` · 3 operations · Request and error types: namespace `Migrations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMigration

- **Signature**: `getMigration(request: Migrations.GetMigrationRequestParams, options?: RequestOptions): ApiPromise<GetMigrationResponse, Migrations.GetMigrationError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /migrations/{migrationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMigrationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Migrations.GetMigrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Migrations.GetMigrationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `migrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMigrationResponse` | `getMigrationResponseSchema` | `src/models/get-migration-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getMigrations

- **Signature**: `getMigrations(options?: RequestOptions): ApiPromise<GetMigrationsResponse, Migrations.GetMigrationsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /migrations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMigrationsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Migrations.GetMigrationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMigrationsResponse` | `getMigrationsResponseSchema` | `src/models/get-migrations-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

### startMigration

- **Signature**: `startMigration(request?: Migrations.StartMigrationRequestParams, options?: RequestOptions): ApiPromise<StartMigrationResponse, Migrations.StartMigrationError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /migrations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartMigrationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Migrations.StartMigrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelsLexAccessDeniedException"` [403] `ModelsLexAccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Migrations.StartMigrationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StartMigrationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartMigrationRequest` | `startMigrationRequestSchema` | `src/models/start-migration-request.ts` |
| `StartMigrationResponse` | `startMigrationResponseSchema` | `src/models/start-migration-response.ts` |
| `ModelsLexAccessDeniedException` | `modelsLexAccessDeniedExceptionSchema` | `src/models/models-lex-access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

