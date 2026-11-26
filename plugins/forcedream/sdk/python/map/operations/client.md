<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `force_dream/client.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.get_agent_reliability

- **Route**: `GET /v1/agents/reliability`
- **Signature**: `def get_agent_reliability(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ReliabilityListResult`
- **Returns (raw)**: `ApiResult[ReliabilityListResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ReliabilityListResult` | `force_dream/models/reliability_list_result.py` |

### client.get_balance

- **Route**: `GET /v1/account/balance`
- **Auth**: `bearer_auth`
- **Signature**: `def get_balance(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BalanceResult`
- **Returns (raw)**: `ApiResult[BalanceResult, GetBalanceErrorBody]`
- **Error**: `GetBalanceErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthorized1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BalanceResult` | `force_dream/models/balance_result.py` |
| `GetBalanceErrorBody` | `force_dream/errors/get_balance_error.py` |
| `Unauthorized1` | `force_dream/models/unauthorized1.py` |

### client.get_invoke_result

- **Route**: `GET /v1/agents/{slug}/result/{taskId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_invoke_result(slug: str, task_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `task_id`
- **Params**: `slug` — path · `task_id` — path `taskId`
- **Returns (parsed)**: `InvokeResult`
- **Returns (raw)**: `ApiResult[InvokeResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `InvokeResult` | `force_dream/models/invoke_result.py` |

### client.get_proof

- **Route**: `GET /v1/workforce/proof/{task_id}/public`
- **Signature**: `def get_proof(task_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path
- **Returns (parsed)**: `V1WorkforceProofPublicResponse`
- **Returns (raw)**: `ApiResult[V1WorkforceProofPublicResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1WorkforceProofPublicResponse` | `force_dream/models/v1_workforce_proof_public_response.py` |

### client.get_proof_public_key

- **Route**: `GET /v1/workforce/proof/public-key`
- **Signature**: `def get_proof_public_key(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1WorkforceProofPublicKeyResponse`
- **Returns (raw)**: `ApiResult[V1WorkforceProofPublicKeyResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1WorkforceProofPublicKeyResponse` | `force_dream/models/v1_workforce_proof_public_key_response.py` |

### client.invoke_agent

- **Route**: `POST /v1/agents/{slug}/invoke`
- **Auth**: `bearer_auth`
- **Signature**: `def invoke_agent(slug: str, body: V1AgentsInvokeRequest | V1AgentsInvokeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `body`
- **Params**: `slug` — path · `body` — JSON body
- **Returns (parsed)**: `V1AgentsInvokeResponse`
- **Returns (raw)**: `ApiResult[V1AgentsInvokeResponse, InvokeAgentErrorBody]`
- **Error**: `InvokeAgentErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthorized1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1AgentsInvokeRequest` | `force_dream/models/v1_agents_invoke_request.py` |
| `V1AgentsInvokeRequestDict` | `force_dream/models/v1_agents_invoke_request.py` |
| `V1AgentsInvokeResponse` | `force_dream/models/v1_agents_invoke_response.py` |
| `InvokeAgentErrorBody` | `force_dream/errors/invoke_agent_error.py` |
| `Unauthorized1` | `force_dream/models/unauthorized1.py` |

### client.list_agents

- **Route**: `GET /v1/agents/list`
- **Signature**: `def list_agents(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AgentListResult`
- **Returns (raw)**: `ApiResult[AgentListResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AgentListResult` | `force_dream/models/agent_list_result.py` |

### client.signup

- **Route**: `POST /api/signup`
- **Signature**: `def signup(body: ApiSignupRequest | ApiSignupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SignupResult`
- **Returns (raw)**: `ApiResult[SignupResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiSignupRequest` | `force_dream/models/api_signup_request.py` |
| `ApiSignupRequestDict` | `force_dream/models/api_signup_request.py` |
| `SignupResult` | `force_dream/models/signup_result.py` |

