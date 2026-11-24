<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipeline — operations

Accessor: `client.pipeline` · Source: `ui_path/apis/pipeline.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pipeline.get_automation_pipeline

- **Route**: `GET /automationpipeline`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def get_automation_pipeline(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PipelineData`
- **Returns (raw)**: `ApiResult[PipelineData, GetAutomationPipelineErrorBody]`
- **Error**: `GetAutomationPipelineErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineData` | `ui_path/models/pipeline_data.py` |
| `GetAutomationPipelineErrorBody` | `ui_path/errors/get_automation_pipeline_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

