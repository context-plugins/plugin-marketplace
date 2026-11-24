<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extraction — operations

Accessor: `client.extraction` · Source: `ui_path/apis/extraction.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extraction.extract_document_async

- **Route**: `POST /projects/{projectId}/extraction/start`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def extract_document_async(project_id: str, body: ExtractionRequest | ExtractionRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version` · `body` — JSON body
- **Returns (parsed)**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Returns (raw)**: `ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ExtractDocumentAsyncErrorBody]`
- **Error**: `ExtractDocumentAsyncErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExtractionRequest` | `ui_path/models/extraction_request.py` |
| `ExtractionRequestDict` | `ui_path/models/extraction_request.py` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py` |
| `ExtractDocumentAsyncErrorBody` | `ui_path/errors/extract_document_async_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.extraction.get_extraction_result

- **Route**: `GET /projects/{projectId}/extraction/{requestId}/result`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def get_extraction_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `request_id`
- **Params**: `project_id` — path `projectId` · `request_id` — path `requestId` · `api_version` — query `api-version`
- **Returns (parsed)**: `ExtractionResult`
- **Returns (raw)**: `ApiResult[ExtractionResult, GetExtractionResultErrorBody]`
- **Error**: `GetExtractionResultErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExtractionResult` | `ui_path/models/extraction_result.py` |
| `GetExtractionResultErrorBody` | `ui_path/errors/get_extraction_result_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

