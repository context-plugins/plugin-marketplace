<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.versions` · Source: `src/resources/versions.ts` · 15 operations · Request and error types: namespace `Versions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBotVersion2

- **Signature**: `createBotVersion2(request: Versions.CreateBotVersion2Request, options?: RequestOptions): ApiPromise<ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, Versions.CreateBotVersion2Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bots/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.CreateBotVersion2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.CreateBotVersion2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexCreateBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexCreateBotVersionRequest` | `modelsLexCreateBotVersionRequestSchema` | `src/models/models-lex-create-bot-version-request.ts` |
| `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi` | `modelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApiSchema` | `src/models/models-lex-create-bot-version-response-amazon-lex-model-building-v2-versions-api.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### createIntentVersion

- **Signature**: `createIntentVersion(request: Versions.CreateIntentVersionRequestParams, options?: RequestOptions): ApiPromise<CreateIntentVersionResponse, Versions.CreateIntentVersionError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /intents/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateIntentVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.CreateIntentVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.CreateIntentVersionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `CreateIntentVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateIntentVersionRequest` | `createIntentVersionRequestSchema` | `src/models/create-intent-version-request.ts` |
| `CreateIntentVersionResponse` | `createIntentVersionResponseSchema` | `src/models/create-intent-version-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### createSlotTypeVersion

- **Signature**: `createSlotTypeVersion(request: Versions.CreateSlotTypeVersionRequestParams, options?: RequestOptions): ApiPromise<CreateSlotTypeVersionResponse, Versions.CreateSlotTypeVersionError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /slottypes/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSlotTypeVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.CreateSlotTypeVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.CreateSlotTypeVersionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `CreateSlotTypeVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSlotTypeVersionRequest` | `createSlotTypeVersionRequestSchema` | `src/models/create-slot-type-version-request.ts` |
| `CreateSlotTypeVersionResponse` | `createSlotTypeVersionResponseSchema` | `src/models/create-slot-type-version-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### deleteBotVersion2

- **Signature**: `deleteBotVersion2(request: Versions.DeleteBotVersion2Request, options?: RequestOptions): ApiPromise<string, Versions.DeleteBotVersion2Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.DeleteBotVersion2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.DeleteBotVersion2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteBotVersionRequest` | `modelsLexDeleteBotVersionRequestSchema` | `src/models/models-lex-delete-bot-version-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteIntentVersion

- **Signature**: `deleteIntentVersion(request: Versions.DeleteIntentVersionRequestParams, options?: RequestOptions): ApiPromise<string, Versions.DeleteIntentVersionError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /intents/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.DeleteIntentVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.DeleteIntentVersionRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |
| `body` | `body` | `DeleteIntentVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteIntentVersionRequest` | `deleteIntentVersionRequestSchema` | `src/models/delete-intent-version-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteSlotTypeVersion2

- **Signature**: `deleteSlotTypeVersion2(request: Versions.DeleteSlotTypeVersion2Request, options?: RequestOptions): ApiPromise<string, Versions.DeleteSlotTypeVersion2Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /slottypes/{name}/version/{version}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.DeleteSlotTypeVersion2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.DeleteSlotTypeVersion2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |
| `body` | `body` | `DeleteSlotTypeVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSlotTypeVersionRequest` | `deleteSlotTypeVersionRequestSchema` | `src/models/delete-slot-type-version-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBot

- **Signature**: `getBot(request: Versions.GetBotRequestParams, options?: RequestOptions): ApiPromise<GetBotResponse, Versions.GetBotError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{name}/versions/{versionOrAlias}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetBotRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `versionOrAlias` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotResponse` | `getBotResponseSchema` | `src/models/get-bot-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBotVersions

- **Signature**: `getBotVersions(request: Versions.GetBotVersionsRequestParams, options?: RequestOptions): ApiPromise<GetBotVersionsResponse, Versions.GetBotVersionsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotVersionsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetBotVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetBotVersionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotVersionsResponse` | `getBotVersionsResponseSchema` | `src/models/get-bot-versions-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getIntent

- **Signature**: `getIntent(request: Versions.GetIntentRequestParams, options?: RequestOptions): ApiPromise<GetIntentResponse, Versions.GetIntentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /intents/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetIntentRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIntentResponse` | `getIntentResponseSchema` | `src/models/get-intent-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getIntentVersions

- **Signature**: `getIntentVersions(request: Versions.GetIntentVersionsRequestParams, options?: RequestOptions): ApiPromise<GetIntentVersionsResponse, Versions.GetIntentVersionsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /intents/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntentVersionsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetIntentVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetIntentVersionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIntentVersionsResponse` | `getIntentVersionsResponseSchema` | `src/models/get-intent-versions-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getSlotType

- **Signature**: `getSlotType(request: Versions.GetSlotTypeRequestParams, options?: RequestOptions): ApiPromise<GetSlotTypeResponse, Versions.GetSlotTypeError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /slottypes/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSlotTypeResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetSlotTypeRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSlotTypeResponse` | `getSlotTypeResponseSchema` | `src/models/get-slot-type-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getSlotTypeVersions

- **Signature**: `getSlotTypeVersions(request: Versions.GetSlotTypeVersionsRequestParams, options?: RequestOptions): ApiPromise<GetSlotTypeVersionsResponse, Versions.GetSlotTypeVersionsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /slottypes/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSlotTypeVersionsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.GetSlotTypeVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.GetSlotTypeVersionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSlotTypeVersionsResponse` | `getSlotTypeVersionsResponseSchema` | `src/models/get-slot-type-versions-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### putBot

- **Signature**: `putBot(request: Versions.PutBotRequestParams, options?: RequestOptions): ApiPromise<PutBotResponse, Versions.PutBotError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /bots/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.PutBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.PutBotRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `PutBotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutBotRequest` | `putBotRequestSchema` | `src/models/put-bot-request.ts` |
| `PutBotResponse` | `putBotResponseSchema` | `src/models/put-bot-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### putIntent

- **Signature**: `putIntent(request: Versions.PutIntentRequestParams, options?: RequestOptions): ApiPromise<PutIntentResponse, Versions.PutIntentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /intents/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.PutIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.PutIntentRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `PutIntentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutIntentRequest` | `putIntentRequestSchema` | `src/models/put-intent-request.ts` |
| `PutIntentResponse` | `putIntentResponseSchema` | `src/models/put-intent-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### putSlotType

- **Signature**: `putSlotType(request: Versions.PutSlotTypeRequestParams, options?: RequestOptions): ApiPromise<PutSlotTypeResponse, Versions.PutSlotTypeError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /slottypes/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutSlotTypeResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Versions.PutSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.PutSlotTypeRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `PutSlotTypeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutSlotTypeRequest` | `putSlotTypeRequestSchema` | `src/models/put-slot-type-request.ts` |
| `PutSlotTypeResponse` | `putSlotTypeResponseSchema` | `src/models/put-slot-type-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

