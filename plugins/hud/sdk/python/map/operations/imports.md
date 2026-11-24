<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.imports` · Source: `hud/apis/imports.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.imports.cancel_import_v2_imports_import_id_cancel_post

- **Route**: `POST /v2/imports/{import_id}/cancel`
- **Signature**: `def cancel_import_v2_imports_import_id_cancel_post(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path
- **Returns (parsed)**: `ImportResponse`
- **Returns (raw)**: `ApiResult[ImportResponse, CancelImportV2ImportsImportIdCancelPostErrorBody]`
- **Error**: `CancelImportV2ImportsImportIdCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportResponse` | `hud/models/import_response.py` |
| `CancelImportV2ImportsImportIdCancelPostErrorBody` | `hud/errors/cancel_import_v2_imports_import_id_cancel_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.create_import_upload_v2_imports_uploads_post

- **Route**: `POST /v2/imports/uploads`
- **Signature**: `def create_import_upload_v2_imports_uploads_post(body: ImportUploadRequest | ImportUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DataFileUploadResponse`
- **Returns (raw)**: `ApiResult[DataFileUploadResponse, CreateImportUploadV2ImportsUploadsPostErrorBody]`
- **Error**: `CreateImportUploadV2ImportsUploadsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportUploadRequest` | `hud/models/import_upload_request.py` |
| `ImportUploadRequestDict` | `hud/models/import_upload_request.py` |
| `DataFileUploadResponse` | `hud/models/data_file_upload_response.py` |
| `CreateImportUploadV2ImportsUploadsPostErrorBody` | `hud/errors/create_import_upload_v2_imports_uploads_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.estimate_import_v2_imports_estimate_get

- **Route**: `GET /v2/imports/estimate`
- **Signature**: `def estimate_import_v2_imports_estimate_get(format_: FormatOrStr, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `format_`, `file_id`
- **Params**: `format_` — query `format` · `file_id` — query
- **Returns (parsed)**: `ImportEstimateResponse`
- **Returns (raw)**: `ApiResult[ImportEstimateResponse, EstimateImportV2ImportsEstimateGetErrorBody]`
- **Error**: `EstimateImportV2ImportsEstimateGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `hud/models/enums/format.py` |
| `ImportEstimateResponse` | `hud/models/import_estimate_response.py` |
| `EstimateImportV2ImportsEstimateGetErrorBody` | `hud/errors/estimate_import_v2_imports_estimate_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.get_import_report_v2_imports_import_id_report_get

- **Route**: `GET /v2/imports/{import_id}/report`
- **Signature**: `def get_import_report_v2_imports_import_id_report_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetImportReportV2ImportsImportIdReportGetErrorBody]`
- **Error**: `GetImportReportV2ImportsImportIdReportGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 413, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetImportReportV2ImportsImportIdReportGetErrorBody` | `hud/errors/get_import_report_v2_imports_import_id_report_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.get_import_v2_imports_import_id_get

- **Route**: `GET /v2/imports/{import_id}`
- **Signature**: `def get_import_v2_imports_import_id_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path
- **Returns (parsed)**: `ImportResponse`
- **Returns (raw)**: `ApiResult[ImportResponse, GetImportV2ImportsImportIdGetErrorBody]`
- **Error**: `GetImportV2ImportsImportIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportResponse` | `hud/models/import_response.py` |
| `GetImportV2ImportsImportIdGetErrorBody` | `hud/errors/get_import_v2_imports_import_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.list_import_formats_v2_imports_formats_get

- **Route**: `GET /v2/imports/formats`
- **Signature**: `def list_import_formats_v2_imports_formats_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ImportFormatListResponse`
- **Returns (raw)**: `ApiResult[ImportFormatListResponse, ListImportFormatsV2ImportsFormatsGetErrorBody]`
- **Error**: `ListImportFormatsV2ImportsFormatsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportFormatListResponse` | `hud/models/import_format_list_response.py` |
| `ListImportFormatsV2ImportsFormatsGetErrorBody` | `hud/errors/list_import_formats_v2_imports_formats_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.imports.list_imports_v2_imports_get

- **Route**: `GET /v2/imports`
- **Signature**: `def list_imports_v2_imports_get(*, format_: FormatOrStr | None = None, taskset_id: UUID | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format` · `taskset_id` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ImportListResponse`
- **Returns (raw)**: `ApiResult[ImportListResponse, ListImportsV2ImportsGetErrorBody]`
- **Error**: `ListImportsV2ImportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `hud/models/enums/format.py` |
| `ImportListResponse` | `hud/models/import_list_response.py` |
| `ListImportsV2ImportsGetErrorBody` | `hud/errors/list_imports_v2_imports_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.imports.start_import_v2_imports_post

- **Route**: `POST /v2/imports`
- **Signature**: `def start_import_v2_imports_post(body: ImportCreateRequest | ImportCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ImportResponse`
- **Returns (raw)**: `ApiResult[ImportResponse, StartImportV2ImportsPostErrorBody]`
- **Error**: `StartImportV2ImportsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportCreateRequest` | `hud/models/import_create_request.py` |
| `ImportCreateRequestDict` | `hud/models/import_create_request.py` |
| `ImportResponse` | `hud/models/import_response.py` |
| `StartImportV2ImportsPostErrorBody` | `hud/errors/start_import_v2_imports_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

