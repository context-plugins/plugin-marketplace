<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomMessages — operations

Accessor: `client.customMessages` · Source: `src/resources/custom-messages.ts` · 5 operations · Request and error types: namespace `CustomMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### customMessageGetById

- **Signature**: `customMessageGetById(request: CustomMessages.CustomMessageGetByIdRequest, options?: RequestOptions): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessageGetByIdError>`
- **Wire**: `GET /api/v1/custom_messages/{custom_message_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomMessageResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `CustomMessages.CustomMessageGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMessages.CustomMessageGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customMessageId` | `path` | `custom_message_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMessageResponse` | `customMessageResponseSchema` | `src/models/custom-message-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### customMessagesCreate

- **Signature**: `customMessagesCreate(request: CustomMessages.CustomMessagesCreateRequest, options?: RequestOptions): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessagesCreateError>`
- **Wire**: `POST /api/v1/custom_messages/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomMessageResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `CustomMessages.CustomMessagesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMessages.CustomMessagesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomMessageCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMessageCreateRequest` | `customMessageCreateRequestSchema` | `src/models/custom-message-create-request.ts` |
| `CustomMessageResponse` | `customMessageResponseSchema` | `src/models/custom-message-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### customMessagesDelete

- **Signature**: `customMessagesDelete(request: CustomMessages.CustomMessagesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, CustomMessages.CustomMessagesDeleteError>`
- **Wire**: `DELETE /api/v1/custom_messages/{custom_message_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `CustomMessages.CustomMessagesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMessages.CustomMessagesDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customMessageId` | `path` | `custom_message_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### customMessagesList

- **Signature**: `customMessagesList(request: CustomMessages.CustomMessagesListRequest, options?: RequestOptions): ApiPromise<ListResponseCustomMessageResponse, CustomMessages.CustomMessagesListError>`
- **Wire**: `GET /api/v1/custom_messages/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseCustomMessageResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `CustomMessages.CustomMessagesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMessages.CustomMessagesListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `CustomMessageProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy32` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields14` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `CustomMessageProperties` | `customMessagePropertiesSchema` | `src/models/custom-message-properties.ts` |
| `OrderBy32` | `orderBy32Schema` | `src/models/unions/order-by32.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields14` | `fields14Schema` | `src/models/unions/fields14.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseCustomMessageResponse` | `listResponseCustomMessageResponseSchema` | `src/models/list-response-custom-message-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### customMessagesUpdate

- **Signature**: `customMessagesUpdate(request: CustomMessages.CustomMessagesUpdateRequest, options?: RequestOptions): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessagesUpdateError>`
- **Wire**: `PUT /api/v1/custom_messages/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomMessageResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `CustomMessages.CustomMessagesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMessages.CustomMessagesUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomMessageUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMessageUpdateRequest` | `customMessageUpdateRequestSchema` | `src/models/custom-message-update-request.ts` |
| `CustomMessageResponse` | `customMessageResponseSchema` | `src/models/custom-message-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

