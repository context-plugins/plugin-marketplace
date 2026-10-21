<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsFolders — operations

Accessor: `client.insightsFolders` · Source: `src/resources/insights-folders.ts` · 8 operations · Request and error types: namespace `InsightsFolders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insightsFolderCreate

- **Signature**: `insightsFolderCreate(request: InsightsFolders.InsightsFolderCreateRequest, options?: RequestOptions): ApiPromise<ResponseInsightsFolderCreate, InsightsFolders.InsightsFolderCreateError>`
- **Wire**: `POST /api/v1/insights/folders/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseInsightsFolderCreate`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsFolderInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsFolderInput` | `insightsFolderInputSchema` | `src/models/insights-folder-input.ts` |
| `ResponseInsightsFolderCreate` | `responseInsightsFolderCreateSchema` | `src/models/unions/response-insights-folder-create.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsFolderDelete

- **Signature**: `insightsFolderDelete(request: InsightsFolders.InsightsFolderDeleteRequest, options?: RequestOptions): ApiPromise<boolean, InsightsFolders.InsightsFolderDeleteError>`
- **Wire**: `DELETE /api/v1/insights/folders/{folder_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsFolderGetById

- **Signature**: `insightsFolderGetById(request: InsightsFolders.InsightsFolderGetByIdRequest, options?: RequestOptions): ApiPromise<FolderDetails, InsightsFolders.InsightsFolderGetByIdError>`
- **Wire**: `GET /api/v1/insights/folders/{folder_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FolderDetails`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderDetails` | `folderDetailsSchema` | `src/models/folder-details.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsFolderList

- **Signature**: `insightsFolderList(request: InsightsFolders.InsightsFolderListRequest, options?: RequestOptions): ApiPromise<ListResponseInsightsFolder, InsightsFolders.InsightsFolderListError>`
- **Wire**: `GET /api/v1/insights/folders/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightsFolder`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `InsightsFolderProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy9` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields9` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `InsightsFolderProperties` | `insightsFolderPropertiesSchema` | `src/models/insights-folder-properties.ts` |
| `OrderBy9` | `orderBy9Schema` | `src/models/unions/order-by9.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields9` | `fields9Schema` | `src/models/unions/fields9.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightsFolder` | `listResponseInsightsFolderSchema` | `src/models/list-response-insights-folder.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsFolderUpdate

- **Signature**: `insightsFolderUpdate(request: InsightsFolders.InsightsFolderUpdateRequest, options?: RequestOptions): ApiPromise<InsightsFolder, InsightsFolders.InsightsFolderUpdateError>`
- **Wire**: `PUT /api/v1/insights/folders/{folder_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsFolder`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |
| `body` | `body` | — | `InsightsFolderInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsFolderInput` | `insightsFolderInputSchema` | `src/models/insights-folder-input.ts` |
| `InsightsFolder` | `insightsFolderSchema` | `src/models/insights-folder.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsFolderUploadFile

- **Signature**: `insightsFolderUploadFile(request: InsightsFolders.InsightsFolderUploadFileRequest, options?: RequestOptions): ApiPromise<InsightsUploadFile, InsightsFolders.InsightsFolderUploadFileError>`
- **Wire**: `POST /api/v1/insights/folders/{folder_id}/upload-file`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsUploadFile`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsFolderUploadFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsFolderUploadFileRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |
| `callId` | `query` | `call_id` | `string` | yes |
| `agentNumber` | `query` | `agent_number` | `AgentNumber1` | no |
| `customerNumber` | `query` | `customer_number` | `CustomerNumber1` | no |
| `startTime` | `query` | `start_time` | `StartTime1` | no |
| `endTime` | `query` | `end_time` | `EndTime1` | no |
| `duration` | `query` | — | `Duration2` | no |
| `metadata` | `query` | — | `Metadata8` | no |
| `file` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentNumber1` | `agentNumber1Schema` | `src/models/unions/agent-number1.ts` |
| `CustomerNumber1` | `customerNumber1Schema` | `src/models/unions/customer-number1.ts` |
| `StartTime1` | `startTime1Schema` | `src/models/unions/start-time1.ts` |
| `EndTime1` | `endTime1Schema` | `src/models/unions/end-time1.ts` |
| `Duration2` | `duration2Schema` | `src/models/unions/duration2.ts` |
| `Metadata8` | `metadata8Schema` | `src/models/unions/metadata8.ts` |
| `InsightsUploadFile` | `insightsUploadFileSchema` | `src/models/insights-upload-file.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsUploadListFiles

- **Signature**: `insightsUploadListFiles(request: InsightsFolders.InsightsUploadListFilesRequest, options?: RequestOptions): ApiPromise<ListResponseInsightsUploadFile, InsightsFolders.InsightsUploadListFilesError>`
- **Wire**: `GET /api/v1/insights/folders/{folder_id}/files`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightsUploadFile`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsUploadListFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsUploadListFilesRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes | — |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `InsightsUploadFileProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy10` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields10` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `InsightsUploadFileProperties` | `insightsUploadFilePropertiesSchema` | `src/models/insights-upload-file-properties.ts` |
| `OrderBy10` | `orderBy10Schema` | `src/models/unions/order-by10.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields10` | `fields10Schema` | `src/models/unions/fields10.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightsUploadFile` | `listResponseInsightsUploadFileSchema` | `src/models/list-response-insights-upload-file.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsUploadMoveFiles

- **Signature**: `insightsUploadMoveFiles(request: InsightsFolders.InsightsUploadMoveFilesRequest, options?: RequestOptions): ApiPromise<InsightsUploadFile[], InsightsFolders.InsightsUploadMoveFilesError>`
- **Wire**: `POST /api/v1/insights/folders/{folder_id}/move-files`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsUploadFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsFolders.InsightsUploadMoveFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFolders.InsightsUploadMoveFilesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |
| `body` | `body` | — | `InsightsFolderFileMove` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsFolderFileMove` | `insightsFolderFileMoveSchema` | `src/models/insights-folder-file-move.ts` |
| `InsightsUploadFile` | `insightsUploadFileSchema` | `src/models/insights-upload-file.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

