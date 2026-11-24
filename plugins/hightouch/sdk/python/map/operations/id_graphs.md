<!-- Generated file — do not edit; regenerated with the SDK. -->

# IdGraphs — operations

Accessor: `client.id_graphs` · Source: `hightouch/apis/id_graphs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.id_graphs.trigger_run_id_graph

- **Route**: `POST /id_graphs/{graphId}/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_run_id_graph(graph_id: str, *, body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `graph_id`
- **Params**: `graph_id` — path `graphId` · `body` — JSON body
- **Returns (parsed)**: `TriggerRunIdrOutput`
- **Returns (raw)**: `ApiResult[TriggerRunIdrOutput, TriggerRunIdGraphErrorBody]`
- **Error**: `TriggerRunIdGraphErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerRunIdrInput` | `hightouch/models/trigger_run_idr_input.py` |
| `TriggerRunIdrInputDict` | `hightouch/models/trigger_run_idr_input.py` |
| `TriggerRunIdrOutput` | `hightouch/models/trigger_run_idr_output.py` |
| `TriggerRunIdGraphErrorBody` | `hightouch/errors/trigger_run_id_graph_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

