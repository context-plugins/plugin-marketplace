<!-- Generated file — do not edit; regenerated with the SDK. -->

# OutboundBatches — operations

Accessor: `client.outboundBatches` · Source: `src/resources/outbound-batches.ts` · 9 operations · Request and error types: namespace `OutboundBatches`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### outboundBatchAdd

- **Signature**: `outboundBatchAdd(request: OutboundBatches.OutboundBatchAddRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchAddError>`
- **Wire**: `POST /api/v1/outbound/batches/{batch_id}/requests`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchAddRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `body` | `body` | — | `CommunicationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommunicationRequest` | `communicationRequestSchema` | `src/models/communication-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchCreate

- **Signature**: `outboundBatchCreate(request: OutboundBatches.OutboundBatchCreateRequest, options?: RequestOptions): ApiPromise<ResponseOutboundBatchCreate, OutboundBatches.OutboundBatchCreateError>`
- **Wire**: `POST /api/v1/outbound/batches`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseOutboundBatchCreate`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CommunicationBatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommunicationBatchInput` | `communicationBatchInputSchema` | `src/models/communication-batch-input.ts` |
| `ResponseOutboundBatchCreate` | `responseOutboundBatchCreateSchema` | `src/models/unions/response-outbound-batch-create.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchDelete

- **Signature**: `outboundBatchDelete(request: OutboundBatches.OutboundBatchDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchDeleteError>`
- **Wire**: `DELETE /api/v1/outbound/batches/{batch_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `deleteReason` | `form` | `delete_reason` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchGetById

- **Signature**: `outboundBatchGetById(request: OutboundBatches.OutboundBatchGetByIdRequest, options?: RequestOptions): ApiPromise<BatchDetails, OutboundBatches.OutboundBatchGetByIdError>`
- **Wire**: `GET /api/v1/outbound/batches/{batch_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BatchDetails`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDetails` | `batchDetailsSchema` | `src/models/batch-details.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchList

- **Signature**: `outboundBatchList(request: OutboundBatches.OutboundBatchListRequest, options?: RequestOptions): ApiPromise<ListResponseCommunicationBatch, OutboundBatches.OutboundBatchListError>`
- **Wire**: `GET /api/v1/outbound/batches`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseCommunicationBatch`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `BatchProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy313` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields25` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `BatchProperties` | `batchPropertiesSchema` | `src/models/batch-properties.ts` |
| `OrderBy313` | `orderBy313Schema` | `src/models/unions/order-by313.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields25` | `fields25Schema` | `src/models/unions/fields25.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseCommunicationBatch` | `listResponseCommunicationBatchSchema` | `src/models/list-response-communication-batch.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchRemove

- **Signature**: `outboundBatchRemove(request: OutboundBatches.OutboundBatchRemoveRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchRemoveError>`
- **Wire**: `POST /api/v1/outbound/batches/{batch_id}/remove-requests`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchRemoveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `body` | `body` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchResults

- **Signature**: `outboundBatchResults(request: OutboundBatches.OutboundBatchResultsRequest, options?: RequestOptions): ApiPromise<CommunicationRequestResult[], OutboundBatches.OutboundBatchResultsError>`
- **Wire**: `GET /api/v1/outbound/batches/{batch_id}/results`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommunicationRequestResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchResultsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `referenceId` | `query` | `reference_id` | `ReferenceId` | no |
| `status` | `query` | — | `Status5` | no |
| `insightsStatus` | `query` | `insights_status` | `InsightsStatus1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReferenceId` | `referenceIdSchema` | `src/models/unions/reference-id.ts` |
| `Status5` | `status5Schema` | `src/models/unions/status5.ts` |
| `InsightsStatus1` | `insightsStatus1Schema` | `src/models/unions/insights-status1.ts` |
| `CommunicationRequestResult` | `communicationRequestResultSchema` | `src/models/communication-request-result.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchUpdate

- **Signature**: `outboundBatchUpdate(request: OutboundBatches.OutboundBatchUpdateRequest, options?: RequestOptions): ApiPromise<CommunicationBatch, OutboundBatches.OutboundBatchUpdateError>`
- **Wire**: `PUT /api/v1/outbound/batches/{batch_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CommunicationBatch`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `body` | `body` | — | `CommunicationBatchUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommunicationBatchUpdate` | `communicationBatchUpdateSchema` | `src/models/communication-batch-update.ts` |
| `CommunicationBatch` | `communicationBatchSchema` | `src/models/communication-batch.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundBatchUpload

- **Signature**: `outboundBatchUpload(request: OutboundBatches.OutboundBatchUploadRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchUploadError>`
- **Wire**: `POST /api/v1/outbound/batches/{batch_id}/upload_batch`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundBatches.OutboundBatchUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundBatches.OutboundBatchUploadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `path` | `batch_id` | `string` | yes |
| `file` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

