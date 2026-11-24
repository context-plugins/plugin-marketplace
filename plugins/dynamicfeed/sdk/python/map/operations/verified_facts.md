<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifiedFacts — operations

Accessor: `client.verified_facts` · Source: `dynamic_feed/apis/verified_facts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.verified_facts.post_v1_answer

- **Route**: `POST /v1/answer`
- **Signature**: `def post_v1_answer(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.verified_facts.post_v1_facts

- **Route**: `POST /v1/facts`
- **Signature**: `def post_v1_facts(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.verified_facts.v1_answer_v1_answer_get

- **Route**: `GET /v1/answer`
- **Signature**: `def v1_answer_v1_answer_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.verified_facts.v1_facts_v1_facts_get

- **Route**: `GET /v1/facts`
- **Signature**: `def v1_facts_v1_facts_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.verified_facts.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get

- **Route**: `GET /v1/state-of-mcp/trend`
- **Signature**: `def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(*, days: int | None = 365, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody]`
- **Error**: `V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody` | `dynamic_feed/errors/v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.verified_facts.v1_state_of_mcp_v1_state_of_mcp_get

- **Route**: `GET /v1/state-of-mcp`
- **Signature**: `def v1_state_of_mcp_v1_state_of_mcp_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

