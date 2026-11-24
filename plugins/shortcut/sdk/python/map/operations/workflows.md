<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workflows — operations

Accessor: `client.workflows` · Source: `shortcut/apis/workflows.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workflows.get_workflow

- **Route**: `GET /api/v3/workflows/{workflow-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_workflow(workflow_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workflow_public_id`
- **Params**: `workflow_public_id` — path `workflow-public-id`
- **Returns (parsed)**: `Workflow`
- **Returns (raw)**: `ApiResult[Workflow, GetWorkflowErrorBody]`
- **Error**: `GetWorkflowErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Workflow` | `shortcut/models/workflow.py` |
| `GetWorkflowErrorBody` | `shortcut/errors/get_workflow_error.py` |

### client.workflows.list_workflows

- **Route**: `GET /api/v3/workflows`
- **Auth**: `api_token`
- **Signature**: `def list_workflows(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Workflow]`
- **Returns (raw)**: `ApiResult[list[Workflow], ListWorkflowsErrorBody]`
- **Error**: `ListWorkflowsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Workflow` | `shortcut/models/workflow.py` |
| `ListWorkflowsErrorBody` | `shortcut/errors/list_workflows_error.py` |

