<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `paid/apis/agents.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.agents.create

- **Route**: `POST /agents`
- **Server**: `default`
- **Signature**: `def create(authorization: str, *, body: AgentCreate | AgentCreateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Agent`
- **Returns (raw)**: `ApiResult[Agent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AgentCreate` | `paid/models/agent_create.py` |
| `AgentCreateDict` | `paid/models/agent_create.py` |
| `Agent` | `paid/models/agent.py` |

### client.agents.delete

- **Route**: `DELETE /agents/{agentId}`
- **Server**: `default`
- **Signature**: `def delete(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `agent_id`, `authorization`
- **Params**: `agent_id` — path `agentId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agents.delete_by_external_id

- **Route**: `DELETE /agents/external/{externalId}`
- **Server**: `default`
- **Signature**: `def delete_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agents.get

- **Route**: `GET /agents/{agentId}`
- **Server**: `default`
- **Signature**: `def get(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `agent_id`, `authorization`
- **Params**: `agent_id` — path `agentId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Agent`
- **Returns (raw)**: `ApiResult[Agent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Agent` | `paid/models/agent.py` |

### client.agents.get_by_external_id

- **Route**: `GET /agents/external/{externalId}`
- **Server**: `default`
- **Signature**: `def get_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Agent`
- **Returns (raw)**: `ApiResult[Agent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Agent` | `paid/models/agent.py` |

### client.agents.list_

- **Route**: `GET /agents`
- **Server**: `default`
- **Signature**: `def list_(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `list[Agent]`
- **Returns (raw)**: `ApiResult[list[Agent], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Agent` | `paid/models/agent.py` |

### client.agents.update

- **Route**: `PUT /agents/{agentId}`
- **Server**: `default`
- **Signature**: `def update(agent_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `agent_id`, `authorization`
- **Params**: `agent_id` — path `agentId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Agent`
- **Returns (raw)**: `ApiResult[Agent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AgentUpdate` | `paid/models/agent_update.py` |
| `AgentUpdateDict` | `paid/models/agent_update.py` |
| `Agent` | `paid/models/agent.py` |

### client.agents.update_by_external_id

- **Route**: `PUT /agents/external/{externalId}`
- **Server**: `default`
- **Signature**: `def update_by_external_id(external_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Agent`
- **Returns (raw)**: `ApiResult[Agent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AgentUpdate` | `paid/models/agent_update.py` |
| `AgentUpdateDict` | `paid/models/agent_update.py` |
| `Agent` | `paid/models/agent.py` |

