<!-- Generated file — do not edit; regenerated with the SDK. -->

# Aliases — operations

Accessor: `client.aliases` · Source: `src/resources/aliases.ts` · 4 operations · Request and error types: namespace `Aliases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBotAlias

- **Signature**: `deleteBotAlias(request: Aliases.DeleteBotAliasRequestParams, options?: RequestOptions): ApiPromise<string, Aliases.DeleteBotAliasError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Aliases.DeleteBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aliases.DeleteBotAliasRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteBotAliasRequest` | `modelsLexDeleteBotAliasRequestSchema` | `src/models/models-lex-delete-bot-alias-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBotAlias

- **Signature**: `getBotAlias(request: Aliases.GetBotAliasRequestParams, options?: RequestOptions): ApiPromise<GetBotAliasResponse, Aliases.GetBotAliasError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Aliases.GetBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aliases.GetBotAliasRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotAliasResponse` | `getBotAliasResponseSchema` | `src/models/get-bot-alias-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBotAliases

- **Signature**: `getBotAliases(request: Aliases.GetBotAliasesRequestParams, options?: RequestOptions): ApiPromise<GetBotAliasesResponse, Aliases.GetBotAliasesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{botName}/aliases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotAliasesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Aliases.GetBotAliasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aliases.GetBotAliasesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotAliasesResponse` | `getBotAliasesResponseSchema` | `src/models/get-bot-aliases-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

### putBotAlias

- **Signature**: `putBotAlias(request: Aliases.PutBotAliasRequestParams, options?: RequestOptions): ApiPromise<PutBotAliasResponse, Aliases.PutBotAliasError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Aliases.PutBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aliases.PutBotAliasRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `PutBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutBotAliasRequest` | `putBotAliasRequestSchema` | `src/models/put-bot-alias-request.ts` |
| `PutBotAliasResponse` | `putBotAliasResponseSchema` | `src/models/put-bot-alias-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

