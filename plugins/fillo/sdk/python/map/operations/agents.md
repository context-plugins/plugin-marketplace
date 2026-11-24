<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `fillo/apis/agents.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.agents.list_agent_grants

- **Route**: `GET /api/v1/manage/agents`
- **Auth**: `bearer_auth`
- **Signature**: `def list_agent_grants(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageAgentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageAgentsResponse, ListAgentGrantsErrorBody]`
- **Error**: `ListAgentGrantsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageAgentsResponse` | `fillo/models/api_v1_manage_agents_response.py` |
| `ListAgentGrantsErrorBody` | `fillo/errors/list_agent_grants_error.py` |
| `Error` | `fillo/models/error.py` |

### client.agents.revoke_agent_grant

- **Route**: `DELETE /api/v1/manage/agents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_agent_grant(id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageAgentsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageAgentsResponse1, RevokeAgentGrantErrorBody]`
- **Error**: `RevokeAgentGrantErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageAgentsResponse1` | `fillo/models/api_v1_manage_agents_response1.py` |
| `RevokeAgentGrantErrorBody` | `fillo/errors/revoke_agent_grant_error.py` |
| `Error` | `fillo/models/error.py` |

