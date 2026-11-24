<!-- Generated file — do not edit; regenerated with the SDK. -->

# Approvals — operations

Accessor: `client.approvals` · Source: `deliverd/apis/approvals.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.approvals.get_api_v1_approvals

- **Route**: `GET /api/v1/approvals`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_approvals(*, limit: int | None = None, cursor: str | None = None, status: Status1OrStr | None = None, external_id: str | None = None, approver: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `status` — query · `external_id` — query `externalId` · `approver` — query
- **Returns (parsed)**: `ApiV1ApprovalsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Status1OrStr` | `deliverd/models/enums/status1.py` |
| `ApiV1ApprovalsResponse1` | `deliverd/models/api_v1_approvals_response1.py` |

### client.approvals.get_api_v1_approvals_by_id

- **Route**: `GET /api/v1/approvals/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_approvals_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ApprovalsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsResponse, GetApiV1ApprovalsByIdErrorBody]`
- **Error**: `GetApiV1ApprovalsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ApprovalsResponse` | `deliverd/models/api_v1_approvals_response.py` |
| `GetApiV1ApprovalsByIdErrorBody` | `deliverd/errors/get_api_v1_approvals_by_id_error.py` |

### client.approvals.post_api_v1_approvals

- **Route**: `POST /api/v1/approvals`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_approvals(*, body: ApiV1ApprovalsRequest | ApiV1ApprovalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ApprovalsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsResponse, PostApiV1ApprovalsErrorBody]`
- **Error**: `PostApiV1ApprovalsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ApprovalsRequest` | `deliverd/models/api_v1_approvals_request.py` |
| `ApiV1ApprovalsRequestDict` | `deliverd/models/api_v1_approvals_request.py` |
| `ApiV1ApprovalsResponse` | `deliverd/models/api_v1_approvals_response.py` |
| `PostApiV1ApprovalsErrorBody` | `deliverd/errors/post_api_v1_approvals_error.py` |

### client.approvals.post_api_v1_approvals_by_id_answers

- **Route**: `POST /api/v1/approvals/{id}/answers`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_approvals_by_id_answers(id_: UUID, *, body: ApiV1ApprovalsAnswersRequest | ApiV1ApprovalsAnswersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ApprovalsAnswersResponse`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsAnswersResponse, PostApiV1ApprovalsByIdAnswersErrorBody]`
- **Error**: `PostApiV1ApprovalsByIdAnswersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ApprovalsAnswersRequest` | `deliverd/models/api_v1_approvals_answers_request.py` |
| `ApiV1ApprovalsAnswersRequestDict` | `deliverd/models/api_v1_approvals_answers_request.py` |
| `ApiV1ApprovalsAnswersResponse` | `deliverd/models/api_v1_approvals_answers_response.py` |
| `PostApiV1ApprovalsByIdAnswersErrorBody` | `deliverd/errors/post_api_v1_approvals_by_id_answers_error.py` |

### client.approvals.post_api_v1_approvals_by_id_cancel

- **Route**: `POST /api/v1/approvals/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_approvals_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ApprovalsCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsCancelResponse, PostApiV1ApprovalsByIdCancelErrorBody]`
- **Error**: `PostApiV1ApprovalsByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ApprovalsCancelResponse` | `deliverd/models/api_v1_approvals_cancel_response.py` |
| `PostApiV1ApprovalsByIdCancelErrorBody` | `deliverd/errors/post_api_v1_approvals_by_id_cancel_error.py` |

### client.approvals.post_api_v1_approvals_by_id_sessions

- **Route**: `POST /api/v1/approvals/{id}/sessions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_approvals_by_id_sessions(id_: UUID, *, body: ApiV1ApprovalsSessionsRequest | ApiV1ApprovalsSessionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ApprovalsSessionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ApprovalsSessionsResponse, PostApiV1ApprovalsByIdSessionsErrorBody]`
- **Error**: `PostApiV1ApprovalsByIdSessionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ApprovalsSessionsRequest` | `deliverd/models/api_v1_approvals_sessions_request.py` |
| `ApiV1ApprovalsSessionsRequestDict` | `deliverd/models/api_v1_approvals_sessions_request.py` |
| `ApiV1ApprovalsSessionsResponse` | `deliverd/models/api_v1_approvals_sessions_response.py` |
| `PostApiV1ApprovalsByIdSessionsErrorBody` | `deliverd/errors/post_api_v1_approvals_by_id_sessions_error.py` |

