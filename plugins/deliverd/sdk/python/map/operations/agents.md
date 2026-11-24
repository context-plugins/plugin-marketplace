<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `deliverd/apis/agents.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.agents.get_api_v1_agents

- **Route**: `GET /api/v1/agents`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_agents(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1AgentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AgentsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1AgentsResponse` | `deliverd/models/api_v1_agents_response.py` |

### client.agents.get_api_v1_agents_by_id

- **Route**: `GET /api/v1/agents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_agents_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AgentsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AgentsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1AgentsResponse1` | `deliverd/models/api_v1_agents_response1.py` |

