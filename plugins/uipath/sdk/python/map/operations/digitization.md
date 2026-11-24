<!-- Generated file — do not edit; regenerated with the SDK. -->

# Digitization — operations

Accessor: `client.digitization` · Source: `ui_path/apis/digitization.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.digitization.digitize_document

- **Route**: `POST /projects/{projectId}/digitization/start`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def digitize_document(project_id: str, body: DigitizationRequest | DigitizationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version` · `body` — JSON body
- **Returns (parsed)**: `DigitizationResult`
- **Returns (raw)**: `ApiResult[DigitizationResult, DigitizeDocumentErrorBody]`
- **Error**: `DigitizeDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DigitizationRequest` | `ui_path/models/digitization_request.py` |
| `DigitizationRequestDict` | `ui_path/models/digitization_request.py` |
| `DigitizationResult` | `ui_path/models/digitization_result.py` |
| `DigitizeDocumentErrorBody` | `ui_path/errors/digitize_document_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

