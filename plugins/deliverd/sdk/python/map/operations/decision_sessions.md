<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionSessions — operations

Accessor: `client.decision_sessions` · Source: `deliverd/apis/decision_sessions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.decision_sessions.get_api_v1_decision_sessions_by_id

- **Route**: `GET /api/v1/decision-sessions/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_decision_sessions_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DecisionSessionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1DecisionSessionsResponse, GetApiV1DecisionSessionsByIdErrorBody]`
- **Error**: `GetApiV1DecisionSessionsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DecisionSessionsResponse` | `deliverd/models/api_v1_decision_sessions_response.py` |
| `GetApiV1DecisionSessionsByIdErrorBody` | `deliverd/errors/get_api_v1_decision_sessions_by_id_error.py` |

### client.decision_sessions.post_api_v1_decision_sessions_by_id_expire

- **Route**: `POST /api/v1/decision-sessions/{id}/expire`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_decision_sessions_by_id_expire(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DecisionSessionsExpireResponse`
- **Returns (raw)**: `ApiResult[ApiV1DecisionSessionsExpireResponse, PostApiV1DecisionSessionsByIdExpireErrorBody]`
- **Error**: `PostApiV1DecisionSessionsByIdExpireErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DecisionSessionsExpireResponse` | `deliverd/models/api_v1_decision_sessions_expire_response.py` |
| `PostApiV1DecisionSessionsByIdExpireErrorBody` | `deliverd/errors/post_api_v1_decision_sessions_by_id_expire_error.py` |

