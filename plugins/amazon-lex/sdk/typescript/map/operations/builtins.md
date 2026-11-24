<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builtins — operations

Accessor: `client.builtins` · Source: `src/resources/builtins.ts` · 5 operations · Request and error types: namespace `Builtins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBuiltinIntent

- **Server**: `defaultAmazonLexModelBuildingV2BuiltinsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBuiltinIntent(request: Builtins.GetBuiltinIntentRequestParams, options?: RequestOptions): ApiPromise<GetBuiltinIntentResponse, Builtins.GetBuiltinIntentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /builtins/intents/{signature}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBuiltinIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Builtins.GetBuiltinIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builtins.GetBuiltinIntentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `signature` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBuiltinIntentResponse` | `getBuiltinIntentResponseSchema` | `src/models/get-builtin-intent-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBuiltinIntents

- **Server**: `defaultAmazonLexModelBuildingV2BuiltinsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBuiltinIntents(options?: RequestOptions): ApiPromise<GetBuiltinIntentsResponse, Builtins.GetBuiltinIntentsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /builtins/intents`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBuiltinIntentsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Builtins.GetBuiltinIntentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBuiltinIntentsResponse` | `getBuiltinIntentsResponseSchema` | `src/models/get-builtin-intents-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

### getBuiltinSlotTypes

- **Server**: `defaultAmazonLexModelBuildingV2BuiltinsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBuiltinSlotTypes(options?: RequestOptions): ApiPromise<GetBuiltinSlotTypesResponse, Builtins.GetBuiltinSlotTypesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /builtins/slottypes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBuiltinSlotTypesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Builtins.GetBuiltinSlotTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBuiltinSlotTypesResponse` | `getBuiltinSlotTypesResponseSchema` | `src/models/get-builtin-slot-types-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

### listBuiltInIntents

- **Server**: `defaultAmazonLexModelBuildingV2BuiltinsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBuiltInIntents(request: Builtins.ListBuiltInIntentsRequestParams, options?: RequestOptions): ApiPromise<ListBuiltInIntentsResponse, Builtins.ListBuiltInIntentsError>`
- **Wire**: `POST /builtins/locales/{localeId}/intents`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBuiltInIntentsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Builtins.ListBuiltInIntentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builtins.ListBuiltInIntentsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListBuiltInIntentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBuiltInIntentsRequest` | `listBuiltInIntentsRequestSchema` | `src/models/list-built-in-intents-request.ts` |
| `ListBuiltInIntentsResponse` | `listBuiltInIntentsResponseSchema` | `src/models/list-built-in-intents-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBuiltInSlotTypes

- **Server**: `defaultAmazonLexModelBuildingV2BuiltinsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBuiltInSlotTypes(request: Builtins.ListBuiltInSlotTypesRequestParams, options?: RequestOptions): ApiPromise<ListBuiltInSlotTypesResponse, Builtins.ListBuiltInSlotTypesError>`
- **Wire**: `POST /builtins/locales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBuiltInSlotTypesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Builtins.ListBuiltInSlotTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builtins.ListBuiltInSlotTypesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListBuiltInSlotTypesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBuiltInSlotTypesRequest` | `listBuiltInSlotTypesRequestSchema` | `src/models/list-built-in-slot-types-request.ts` |
| `ListBuiltInSlotTypesResponse` | `listBuiltInSlotTypesResponseSchema` | `src/models/list-built-in-slot-types-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

