<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qa — operations

Accessor: `client.qa` · Source: `hud/apis/qa.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qa.list_qa_checks_v2_qa_checks_get

- **Route**: `GET /v2/qa/checks`
- **Signature**: `def list_qa_checks_v2_qa_checks_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `QaCheckListResponse`
- **Returns (raw)**: `ApiResult[QaCheckListResponse, ListQaChecksV2QaChecksGetErrorBody]`
- **Error**: `ListQaChecksV2QaChecksGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaCheckListResponse` | `hud/models/qa_check_list_response.py` |
| `ListQaChecksV2QaChecksGetErrorBody` | `hud/errors/list_qa_checks_v2_qa_checks_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.qa.list_qa_results_v2_qa_results_get

- **Route**: `GET /v2/qa/results`
- **Signature**: `def list_qa_results_v2_qa_results_get(*, trace_ids: list[UUID] | None = None, task_ids: list[UUID] | None = None, include_history: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `trace_ids` — query · `task_ids` — query · `include_history` — query
- **Returns (parsed)**: `QaResultListResponse`
- **Returns (raw)**: `ApiResult[QaResultListResponse, ListQaResultsV2QaResultsGetErrorBody]`
- **Error**: `ListQaResultsV2QaResultsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaResultListResponse` | `hud/models/qa_result_list_response.py` |
| `ListQaResultsV2QaResultsGetErrorBody` | `hud/errors/list_qa_results_v2_qa_results_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.qa.run_qa_checks_v2_qa_runs_post

- **Route**: `POST /v2/qa/runs`
- **Signature**: `def run_qa_checks_v2_qa_runs_post(body: QaRunCreateRequest | QaRunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QaResultListResponse`
- **Returns (raw)**: `ApiResult[QaResultListResponse, RunQaChecksV2QaRunsPostErrorBody]`
- **Error**: `RunQaChecksV2QaRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaRunCreateRequest` | `hud/models/qa_run_create_request.py` |
| `QaRunCreateRequestDict` | `hud/models/qa_run_create_request.py` |
| `QaResultListResponse` | `hud/models/qa_result_list_response.py` |
| `RunQaChecksV2QaRunsPostErrorBody` | `hud/errors/run_qa_checks_v2_qa_runs_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

