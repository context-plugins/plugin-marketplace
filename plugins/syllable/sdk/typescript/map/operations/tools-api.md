<!-- Generated file — do not edit; regenerated with the SDK. -->

# ToolsApi — operations

Accessor: `client.toolsApi` · Source: `src/resources/tools-api.ts` · 6 operations · Request and error types: namespace `ToolsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### toolCreate

- **Signature**: `toolCreate(request: ToolsApi.ToolCreateRequestParams, options?: RequestOptions): ApiPromise<ToolResponse, ToolsApi.ToolCreateError>`
- **Wire**: `POST /api/v1/tools/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ToolCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolCreateRequest` | `toolCreateRequestSchema` | `src/models/tool-create-request.ts` |
| `ToolResponse` | `toolResponseSchema` | `src/models/tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### toolDelete

- **Signature**: `toolDelete(request: ToolsApi.ToolDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ToolsApi.ToolDeleteError>`
- **Wire**: `DELETE /api/v1/tools/{tool_name}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `toolName` | `path` | `tool_name` | `string` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### toolGetByName

- **Signature**: `toolGetByName(request: ToolsApi.ToolGetByNameRequest, options?: RequestOptions): ApiPromise<ToolDetailResponse, ToolsApi.ToolGetByNameError>`
- **Wire**: `GET /api/v1/tools/{tool_name}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ToolDetailResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolGetByNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolGetByNameRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `toolName` | `path` | `tool_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolDetailResponse` | `toolDetailResponseSchema` | `src/models/tool-detail-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### toolHistory

- **Signature**: `toolHistory(request: ToolsApi.ToolHistoryRequest, options?: RequestOptions): ApiPromise<ListResponseToolHistoryResponse, ToolsApi.ToolHistoryError>`
- **Wire**: `GET /api/v1/tools/{tool_id}/history`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseToolHistoryResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolHistoryRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `toolId` | `path` | `tool_id` | `number` | yes | — |
| `page` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `25` |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1Enum` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByDirection1Enum` | `orderByDirection1EnumSchema` | `src/models/order-by-direction1-enum.ts` |
| `ListResponseToolHistoryResponse` | `listResponseToolHistoryResponseSchema` | `src/models/list-response-tool-history-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### toolList

- **Signature**: `toolList(request: ToolsApi.ToolListRequest, options?: RequestOptions): ApiPromise<ListResponseToolResponse, ToolsApi.ToolListError>`
- **Wire**: `GET /api/v1/tools/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `ToolProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy38` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields20` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `ToolProperties` | `toolPropertiesSchema` | `src/models/tool-properties.ts` |
| `OrderBy38` | `orderBy38Schema` | `src/models/unions/order-by38.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields20` | `fields20Schema` | `src/models/unions/fields20.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseToolResponse` | `listResponseToolResponseSchema` | `src/models/list-response-tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### toolUpdate

- **Signature**: `toolUpdate(request: ToolsApi.ToolUpdateRequestParams, options?: RequestOptions): ApiPromise<ToolResponse, ToolsApi.ToolUpdateError>`
- **Wire**: `PUT /api/v1/tools/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ToolsApi.ToolUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ToolsApi.ToolUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ToolUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolUpdateRequest` | `toolUpdateRequestSchema` | `src/models/tool-update-request.ts` |
| `ToolResponse` | `toolResponseSchema` | `src/models/tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

