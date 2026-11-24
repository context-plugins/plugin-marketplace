<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.imports` · Source: `src/resources/imports.ts` · 8 operations · Request and error types: namespace `Imports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelImportV2ImportsImportIdCancelPost

- **Signature**: `cancelImportV2ImportsImportIdCancelPost(request: Imports.CancelImportV2ImportsImportIdCancelPostRequest, options?: RequestOptions): ApiPromise<ImportResponse, Imports.CancelImportV2ImportsImportIdCancelPostError>`
- **Wire**: `POST /v2/imports/{import_id}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.CancelImportV2ImportsImportIdCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.CancelImportV2ImportsImportIdCancelPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `importId` | `path` | `import_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportResponse` | `importResponseSchema` | `src/models/import-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createImportUploadV2ImportsUploadsPost

- **Signature**: `createImportUploadV2ImportsUploadsPost(request: Imports.CreateImportUploadV2ImportsUploadsPostRequest, options?: RequestOptions): ApiPromise<DataFileUploadResponse, Imports.CreateImportUploadV2ImportsUploadsPostError>`
- **Wire**: `POST /v2/imports/uploads`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataFileUploadResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.CreateImportUploadV2ImportsUploadsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.CreateImportUploadV2ImportsUploadsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImportUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportUploadRequest` | `importUploadRequestSchema` | `src/models/import-upload-request.ts` |
| `DataFileUploadResponse` | `dataFileUploadResponseSchema` | `src/models/data-file-upload-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### estimateImportV2ImportsEstimateGet

- **Signature**: `estimateImportV2ImportsEstimateGet(request: Imports.EstimateImportV2ImportsEstimateGetRequest, options?: RequestOptions): ApiPromise<ImportEstimateResponse, Imports.EstimateImportV2ImportsEstimateGetError>`
- **Wire**: `GET /v2/imports/estimate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImportEstimateResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.EstimateImportV2ImportsEstimateGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.EstimateImportV2ImportsEstimateGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `format` | `query` | — | `Format` | yes |
| `fileId` | `query` | `file_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ImportEstimateResponse` | `importEstimateResponseSchema` | `src/models/import-estimate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getImportReportV2ImportsImportIdReportGet

- **Signature**: `getImportReportV2ImportsImportIdReportGet(request: Imports.GetImportReportV2ImportsImportIdReportGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Imports.GetImportReportV2ImportsImportIdReportGetError>`
- **Wire**: `GET /v2/imports/{import_id}/report`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.GetImportReportV2ImportsImportIdReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [413] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.GetImportReportV2ImportsImportIdReportGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `importId` | `path` | `import_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getImportV2ImportsImportIdGet

- **Signature**: `getImportV2ImportsImportIdGet(request: Imports.GetImportV2ImportsImportIdGetRequest, options?: RequestOptions): ApiPromise<ImportResponse, Imports.GetImportV2ImportsImportIdGetError>`
- **Wire**: `GET /v2/imports/{import_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.GetImportV2ImportsImportIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.GetImportV2ImportsImportIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `importId` | `path` | `import_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportResponse` | `importResponseSchema` | `src/models/import-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listImportFormatsV2ImportsFormatsGet

- **Signature**: `listImportFormatsV2ImportsFormatsGet(options?: RequestOptions): ApiPromise<ImportFormatListResponse, Imports.ListImportFormatsV2ImportsFormatsGetError>`
- **Wire**: `GET /v2/imports/formats`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImportFormatListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.ListImportFormatsV2ImportsFormatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportFormatListResponse` | `importFormatListResponseSchema` | `src/models/import-format-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listImportsV2ImportsGet

- **Signature**: `listImportsV2ImportsGet(request?: Imports.ListImportsV2ImportsGetRequest, options?: RequestOptions): ApiPromise<ImportListResponse, Imports.ListImportsV2ImportsGetError>`
- **Wire**: `GET /v2/imports`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImportListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.ListImportsV2ImportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.ListImportsV2ImportsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `query` | — | `Format1` | no | — |
| `tasksetId` | `query` | `taskset_id` | `TasksetId` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `TasksetId` | `tasksetIdSchema` | `src/models/unions/taskset-id.ts` |
| `ImportListResponse` | `importListResponseSchema` | `src/models/import-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### startImportV2ImportsPost

- **Signature**: `startImportV2ImportsPost(request: Imports.StartImportV2ImportsPostRequest, options?: RequestOptions): ApiPromise<ImportResponse, Imports.StartImportV2ImportsPostError>`
- **Wire**: `POST /v2/imports`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Imports.StartImportV2ImportsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.StartImportV2ImportsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportCreateRequest` | `importCreateRequestSchema` | `src/models/import-create-request.ts` |
| `ImportResponse` | `importResponseSchema` | `src/models/import-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

