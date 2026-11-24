<!-- Generated file — do not edit; regenerated with the SDK. -->

# EpicWorkflowApi — operations

Accessor: `client.epic_workflow_api` · Source: `shortcut/apis/epic_workflow_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.epic_workflow_api.get_epic_workflow

- **Route**: `GET /api/v3/epic-workflow`
- **Auth**: `api_token`
- **Signature**: `def get_epic_workflow(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `EpicWorkflow`
- **Returns (raw)**: `ApiResult[EpicWorkflow, GetEpicWorkflowErrorBody]`
- **Error**: `GetEpicWorkflowErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicWorkflow` | `shortcut/models/epic_workflow.py` |
| `GetEpicWorkflowErrorBody` | `shortcut/errors/get_epic_workflow_error.py` |

