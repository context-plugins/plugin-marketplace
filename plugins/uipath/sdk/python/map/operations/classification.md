<!-- Generated file — do not edit; regenerated with the SDK. -->

# Classification — operations

Accessor: `client.classification` · Source: `ui_path/apis/classification.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.classification.classify_document_async

- **Route**: `POST /projects/{projectId}/classification/start`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def classify_document_async(project_id: str, body: ClassificationRequest | ClassificationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version` · `body` — JSON body
- **Returns (parsed)**: `AsyncJobStartResponse`
- **Returns (raw)**: `ApiResult[AsyncJobStartResponse, ClassifyDocumentAsyncErrorBody]`
- **Error**: `ClassifyDocumentAsyncErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationRequest` | `ui_path/models/classification_request.py` |
| `ClassificationRequestDict` | `ui_path/models/classification_request.py` |
| `AsyncJobStartResponse` | `ui_path/models/async_job_start_response.py` |
| `ClassifyDocumentAsyncErrorBody` | `ui_path/errors/classify_document_async_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.classification.get_classification_result

- **Route**: `GET /projects/{projectId}/classification/{requestId}/result`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def get_classification_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `request_id`
- **Params**: `project_id` — path `projectId` · `request_id` — path `requestId` · `api_version` — query `api-version`
- **Returns (parsed)**: `ClassificationResult`
- **Returns (raw)**: `ApiResult[ClassificationResult, GetClassificationResultErrorBody]`
- **Error**: `GetClassificationResultErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationResult` | `ui_path/models/classification_result.py` |
| `GetClassificationResultErrorBody` | `ui_path/errors/get_classification_result_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

