<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prompts — operations

Accessor: `client.prompts` · Source: `src/resources/prompts.ts` · 7 operations · Request and error types: namespace `Prompts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### promptGetSupportedLlms

- **Signature**: `promptGetSupportedLlms(request: Prompts.PromptGetSupportedLlmsRequest, options?: RequestOptions): ApiPromise<SupportedLlm[], Prompts.PromptGetSupportedLlmsError>`
- **Wire**: `GET /api/v1/prompts/llms/supported`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedLlm[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptGetSupportedLlmsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptGetSupportedLlmsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `selectedModel` | `query` | `selected_model` | `SelectedModel` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SelectedModel` | `selectedModelSchema` | `src/models/unions/selected-model.ts` |
| `SupportedLlm` | `supportedLlmSchema` | `src/models/supported-llm.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsCreate

- **Signature**: `promptsCreate(request: Prompts.PromptsCreateRequest, options?: RequestOptions): ApiPromise<PromptResponse, Prompts.PromptsCreateError>`
- **Wire**: `POST /api/v1/prompts/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PromptResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PromptCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PromptCreateRequest` | `promptCreateRequestSchema` | `src/models/prompt-create-request.ts` |
| `PromptResponse` | `promptResponseSchema` | `src/models/prompt-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsDelete

- **Signature**: `promptsDelete(request: Prompts.PromptsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Prompts.PromptsDeleteError>`
- **Wire**: `DELETE /api/v1/prompts/{prompt_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `promptId` | `path` | `prompt_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsGetById

- **Signature**: `promptsGetById(request: Prompts.PromptsGetByIdRequest, options?: RequestOptions): ApiPromise<PromptResponse, Prompts.PromptsGetByIdError>`
- **Wire**: `GET /api/v1/prompts/{prompt_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PromptResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `promptId` | `path` | `prompt_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PromptResponse` | `promptResponseSchema` | `src/models/prompt-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsHistory

- **Signature**: `promptsHistory(request: Prompts.PromptsHistoryRequest, options?: RequestOptions): ApiPromise<PromptHistoryResponse[], Prompts.PromptsHistoryError>`
- **Wire**: `GET /api/v1/prompts/{prompt_id}/history`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PromptHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `promptId` | `path` | `prompt_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PromptHistoryResponse` | `promptHistoryResponseSchema` | `src/models/prompt-history-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsList

- **Signature**: `promptsList(request: Prompts.PromptsListRequest, options?: RequestOptions): ApiPromise<ListResponsePromptResponse, Prompts.PromptsListError>`
- **Wire**: `GET /api/v1/prompts/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponsePromptResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `PromptProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy33` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields15` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `PromptProperties` | `promptPropertiesSchema` | `src/models/prompt-properties.ts` |
| `OrderBy33` | `orderBy33Schema` | `src/models/unions/order-by33.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields15` | `fields15Schema` | `src/models/unions/fields15.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponsePromptResponse` | `listResponsePromptResponseSchema` | `src/models/list-response-prompt-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### promptsUpdate

- **Signature**: `promptsUpdate(request: Prompts.PromptsUpdateRequest, options?: RequestOptions): ApiPromise<PromptResponse, Prompts.PromptsUpdateError>`
- **Wire**: `PUT /api/v1/prompts/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PromptResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Prompts.PromptsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prompts.PromptsUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PromptUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PromptUpdateRequest` | `promptUpdateRequestSchema` | `src/models/prompt-update-request.ts` |
| `PromptResponse` | `promptResponseSchema` | `src/models/prompt-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

