<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentStats — operations

Accessor: `client.agent_stats` · Source: `dynamic_feed/apis/agent_stats.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.agent_stats.agent_stats_v1_agent_stats_get

- **Route**: `GET /v1/agent-stats`
- **Signature**: `def agent_stats_v1_agent_stats_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

