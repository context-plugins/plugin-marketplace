<!-- Generated file — do not edit; regenerated with the SDK. -->

# Validation — operations

Accessor: `client.validation` · Source: `ui_path/apis/validation.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.validation.validate_document_async

- **Route**: `POST /projects/{projectId}/validation/start`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def validate_document_async(project_id: str, body: ValidationRequest | ValidationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version` · `body` — JSON body
- **Returns (parsed)**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Returns (raw)**: `ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ValidateDocumentAsyncErrorBody]`
- **Error**: `ValidateDocumentAsyncErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValidationRequest` | `ui_path/models/validation_request.py` |
| `ValidationRequestDict` | `ui_path/models/validation_request.py` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py` |
| `ValidateDocumentAsyncErrorBody` | `ui_path/errors/validate_document_async_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

