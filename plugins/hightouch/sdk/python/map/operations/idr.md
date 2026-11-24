<!-- Generated file — do not edit; regenerated with the SDK. -->

# Idr — operations

Accessor: `client.idr` · Source: `hightouch/apis/idr.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.idr.list_idr_runs

- **Route**: `GET /idr/{graphId}/runs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_idr_runs(graph_id: str, *, run_id: str | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, limit: float | None = 20.0, offset: float | None = 0.0, order_by: OrderByHightouchIdrApiOrStr | None = OrderByHightouchIdrApi.CREATED_AT, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `graph_id`
- **Params**: `graph_id` — path `graphId` · `run_id` — query `runId` · `after` — query · `before` — query · `limit` — query · `offset` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `ListIdrRunsOutput`
- **Returns (raw)**: `ApiResult[ListIdrRunsOutput, ListIdrRunsErrorBody]`
- **Error**: `ListIdrRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchIdrApiOrStr` | `hightouch/models/enums/order_by_hightouch_idr_api.py` |
| `ListIdrRunsOutput` | `hightouch/models/list_idr_runs_output.py` |
| `ListIdrRunsErrorBody` | `hightouch/errors/list_idr_runs_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.idr.queue_for_reprocessing

- **Route**: `POST /idr/{graphId}/queue-for-reprocessing`
- **Auth**: `bearer_auth`
- **Signature**: `def queue_for_reprocessing(graph_id: str, *, body: IdrQueueForReprocessingInput | IdrQueueForReprocessingInputDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `graph_id`
- **Params**: `graph_id` — path `graphId` · `body` — JSON body
- **Returns (parsed)**: `IdrQueueForReprocessingOutput`
- **Returns (raw)**: `ApiResult[IdrQueueForReprocessingOutput, QueueForReprocessingErrorBody]`
- **Error**: `QueueForReprocessingErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `IdrQueueForReprocessingInput` | `hightouch/models/idr_queue_for_reprocessing_input.py` |
| `IdrQueueForReprocessingInputDict` | `hightouch/models/idr_queue_for_reprocessing_input.py` |
| `IdrQueueForReprocessingOutput` | `hightouch/models/idr_queue_for_reprocessing_output.py` |
| `QueueForReprocessingErrorBody` | `hightouch/errors/queue_for_reprocessing_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.idr.reprocess_status

- **Route**: `GET /idr/{graphId}/reprocess-status/{requestId}`
- **Auth**: `bearer_auth`
- **Signature**: `def reprocess_status(graph_id: str, request_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `graph_id`, `request_id`
- **Params**: `graph_id` — path `graphId` · `request_id` — path `requestId`
- **Returns (parsed)**: `IdrReprocessStatusOutput`
- **Returns (raw)**: `ApiResult[IdrReprocessStatusOutput, ReprocessStatusErrorBody]`
- **Error**: `ReprocessStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `IdrReprocessStatusOutput` | `hightouch/models/idr_reprocess_status_output.py` |
| `ReprocessStatusErrorBody` | `hightouch/errors/reprocess_status_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.idr.trigger_idr_run

- **Route**: `POST /idr/{graphId}/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_idr_run(graph_id: str, *, body: TriggerRunIdrInput | TriggerRunIdrInputDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `graph_id`
- **Params**: `graph_id` — path `graphId` · `body` — JSON body
- **Returns (parsed)**: `TriggerRunIdrOutput`
- **Returns (raw)**: `ApiResult[TriggerRunIdrOutput, TriggerIdrRunErrorBody]`
- **Error**: `TriggerIdrRunErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerRunIdrInput` | `hightouch/models/trigger_run_idr_input.py` |
| `TriggerRunIdrInputDict` | `hightouch/models/trigger_run_idr_input.py` |
| `TriggerRunIdrOutput` | `hightouch/models/trigger_run_idr_output.py` |
| `TriggerIdrRunErrorBody` | `hightouch/errors/trigger_idr_run_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

