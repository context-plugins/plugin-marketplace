<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gates — operations

Accessor: `client.gates` · Source: `deliverd/apis/gates.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.gates.get_api_v1_gates_by_id

- **Route**: `GET /api/v1/gates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_gates_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1GatesResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1GatesResponse` | `deliverd/models/api_v1_gates_response.py` |

### client.gates.get_api_v1_gates_by_id_evidence

- **Route**: `GET /api/v1/gates/{id}/evidence`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_gates_by_id_evidence(id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `format_` — query `format`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FormatOrStr` | `deliverd/models/enums/format.py` |

### client.gates.post_api_v1_gates

- **Route**: `POST /api/v1/gates`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_gates(*, body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1GatesResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesResponse, PostApiV1GatesErrorBody]`
- **Error**: `PostApiV1GatesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Gates423Error1` [423] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GatesRequest` | `deliverd/models/api_v1_gates_request.py` |
| `ApiV1GatesRequestDict` | `deliverd/models/api_v1_gates_request.py` |
| `ApiV1GatesResponse` | `deliverd/models/api_v1_gates_response.py` |
| `PostApiV1GatesErrorBody` | `deliverd/errors/post_api_v1_gates_error.py` |
| `ApiV1Gates423Error1` | `deliverd/models/api_v1_gates423_error1.py` |

### client.gates.post_api_v1_gates_by_id_cancel

- **Route**: `POST /api/v1/gates/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_gates_by_id_cancel(id_: UUID, *, body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1GatesCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesCancelResponse, PostApiV1GatesByIdCancelErrorBody]`
- **Error**: `PostApiV1GatesByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1GatesCancel403Error1` [403] · `ApiV1GatesCancel409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GatesCancelRequest` | `deliverd/models/api_v1_gates_cancel_request.py` |
| `ApiV1GatesCancelRequestDict` | `deliverd/models/api_v1_gates_cancel_request.py` |
| `ApiV1GatesCancelResponse` | `deliverd/models/api_v1_gates_cancel_response.py` |
| `PostApiV1GatesByIdCancelErrorBody` | `deliverd/errors/post_api_v1_gates_by_id_cancel_error.py` |
| `ApiV1GatesCancel403Error1` | `deliverd/models/api_v1_gates_cancel403_error1.py` |
| `ApiV1GatesCancel409Error1` | `deliverd/models/api_v1_gates_cancel409_error1.py` |

### client.gates.post_api_v1_gates_by_id_execution

- **Route**: `POST /api/v1/gates/{id}/execution`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_gates_by_id_execution(id_: UUID, *, body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1GatesExecutionResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesExecutionResponse, PostApiV1GatesByIdExecutionErrorBody]`
- **Error**: `PostApiV1GatesByIdExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1GatesExecution403Error1` [403] · `ApiV1GatesExecution409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GatesExecutionRequest` | `deliverd/models/api_v1_gates_execution_request.py` |
| `ApiV1GatesExecutionRequestDict` | `deliverd/models/api_v1_gates_execution_request.py` |
| `ApiV1GatesExecutionResponse` | `deliverd/models/api_v1_gates_execution_response.py` |
| `PostApiV1GatesByIdExecutionErrorBody` | `deliverd/errors/post_api_v1_gates_by_id_execution_error.py` |
| `ApiV1GatesExecution403Error1` | `deliverd/models/api_v1_gates_execution403_error1.py` |
| `ApiV1GatesExecution409Error1` | `deliverd/models/api_v1_gates_execution409_error1.py` |

### client.gates.post_api_v1_gates_by_id_release

- **Route**: `POST /api/v1/gates/{id}/release`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_gates_by_id_release(id_: UUID, *, body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1GatesReleaseResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesReleaseResponse, PostApiV1GatesByIdReleaseErrorBody]`
- **Error**: `PostApiV1GatesByIdReleaseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1GatesRelease403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GatesReleaseRequest` | `deliverd/models/api_v1_gates_release_request.py` |
| `ApiV1GatesReleaseRequestDict` | `deliverd/models/api_v1_gates_release_request.py` |
| `ApiV1GatesReleaseResponse` | `deliverd/models/api_v1_gates_release_response.py` |
| `PostApiV1GatesByIdReleaseErrorBody` | `deliverd/errors/post_api_v1_gates_by_id_release_error.py` |
| `ApiV1GatesRelease403Error1` | `deliverd/models/api_v1_gates_release403_error1.py` |

### client.gates.post_api_v1_gates_verify_token

- **Route**: `POST /api/v1/gates/verify-token`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_gates_verify_token(*, body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1GatesVerifyTokenResponse`
- **Returns (raw)**: `ApiResult[ApiV1GatesVerifyTokenResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1GatesVerifyTokenRequest` | `deliverd/models/api_v1_gates_verify_token_request.py` |
| `ApiV1GatesVerifyTokenRequestDict` | `deliverd/models/api_v1_gates_verify_token_request.py` |
| `ApiV1GatesVerifyTokenResponse` | `deliverd/models/api_v1_gates_verify_token_response.py` |

