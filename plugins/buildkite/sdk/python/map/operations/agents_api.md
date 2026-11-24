<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentsApi — operations

Accessor: `client.agents_api` · Source: `buildkite/apis/agents_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.agents_api.get_agent

- **Route**: `GET /organizations/{org}/agents/{id}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `id_`
- **Params**: `org` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.agents_api.list_agents

- **Route**: `GET /organizations/{org}/agents`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_agents(org: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — path
- **Returns (parsed)**: `list[Agent]`
- **Returns (raw)**: `ApiResult[list[Agent], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Agent` | `buildkite/models/agent.py` |

### client.agents_api.stop_agent

- **Route**: `PUT /organizations/{org}/agents/{id}/stop`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def stop_agent(org: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `id_`
- **Params**: `org` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

