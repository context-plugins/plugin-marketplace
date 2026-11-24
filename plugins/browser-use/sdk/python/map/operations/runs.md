<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runs — operations

Accessor: `client.runs` · Source: `browser_use/apis/runs.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.runs.cancel_run_runs_run_id_cancel_post

- **Route**: `POST /runs/{run_id}/cancel`
- **Auth**: `api_key_header`
- **Signature**: `def cancel_run_runs_run_id_cancel_post(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `RunSummary`
- **Returns (raw)**: `ApiResult[RunSummary, CancelRunRunsRunIdCancelPostErrorBody]`
- **Error**: `CancelRunRunsRunIdCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, 502, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `RunSummary` | `browser_use/models/run_summary.py` |
| `CancelRunRunsRunIdCancelPostErrorBody` | `browser_use/errors/cancel_run_runs_run_id_cancel_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.create_run_runs_post

- **Route**: `POST /runs`
- **Auth**: `api_key_header`
- **Signature**: `def create_run_runs_post(body: RunCreateRequest | RunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RunCreateResponse`
- **Returns (raw)**: `ApiResult[RunCreateResponse, CreateRunRunsPostErrorBody]`
- **Error**: `CreateRunRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiKeySpendLimitError` [402] · `HttpValidationError` [422] · `RawError` [400, 403, 404, 409, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `RunCreateRequest` | `browser_use/models/run_create_request.py` |
| `RunCreateRequestDict` | `browser_use/models/run_create_request.py` |
| `RunCreateResponse` | `browser_use/models/run_create_response.py` |
| `CreateRunRunsPostErrorBody` | `browser_use/errors/create_run_runs_post_error.py` |
| `ApiKeySpendLimitError` | `browser_use/models/api_key_spend_limit_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.get_run_events_runs_run_id_events_get

- **Route**: `GET /runs/{run_id}/events`
- **Auth**: `api_key_header`
- **Signature**: `def get_run_events_runs_run_id_events_get(run_id: UUID, *, limit: int | None = 200, after: int | None = 0, include_output: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path · `limit` — query · `after` — query · `include_output` — query
- **Returns (parsed)**: `RunEventsResponse`
- **Returns (raw)**: `ApiResult[RunEventsResponse, GetRunEventsRunsRunIdEventsGetErrorBody]`
- **Error**: `GetRunEventsRunsRunIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `RunEventsResponse` | `browser_use/models/run_events_response.py` |
| `GetRunEventsRunsRunIdEventsGetErrorBody` | `browser_use/errors/get_run_events_runs_run_id_events_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.get_run_runs_run_id_get

- **Route**: `GET /runs/{run_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_run_runs_run_id_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `RunSummary`
- **Returns (raw)**: `ApiResult[RunSummary, GetRunRunsRunIdGetErrorBody]`
- **Error**: `GetRunRunsRunIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `RunSummary` | `browser_use/models/run_summary.py` |
| `GetRunRunsRunIdGetErrorBody` | `browser_use/errors/get_run_runs_run_id_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.get_run_status_runs_run_id_status_get

- **Route**: `GET /runs/{run_id}/status`
- **Auth**: `api_key_header`
- **Signature**: `def get_run_status_runs_run_id_status_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `RunStatusResponse`
- **Returns (raw)**: `ApiResult[RunStatusResponse, GetRunStatusRunsRunIdStatusGetErrorBody]`
- **Error**: `GetRunStatusRunsRunIdStatusGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `RunStatusResponse` | `browser_use/models/run_status_response.py` |
| `GetRunStatusRunsRunIdStatusGetErrorBody` | `browser_use/errors/get_run_status_runs_run_id_status_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.list_run_attachments_runs_run_id_attachments_get

- **Route**: `GET /runs/{run_id}/attachments`
- **Auth**: `api_key_header`
- **Signature**: `def list_run_attachments_runs_run_id_attachments_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `RunAttachmentsResponse`
- **Returns (raw)**: `ApiResult[RunAttachmentsResponse, ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody]`
- **Error**: `ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `RunAttachmentsResponse` | `browser_use/models/run_attachments_response.py` |
| `ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody` | `browser_use/errors/list_run_attachments_runs_run_id_attachments_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.runs.list_runs_runs_get

- **Route**: `GET /runs`
- **Auth**: `api_key_header`
- **Signature**: `def list_runs_runs_get(*, limit: int | None = 50, cursor: str | None = None, session_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `session_id` — query `sessionId`
- **Returns (parsed)**: `RunListResponse`
- **Returns (raw)**: `ApiResult[RunListResponse, ListRunsRunsGetErrorBody]`
- **Error**: `ListRunsRunsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `RunListResponse` | `browser_use/models/run_list_response.py` |
| `ListRunsRunsGetErrorBody` | `browser_use/errors/list_runs_runs_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

