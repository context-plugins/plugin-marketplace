# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ForceDreamClient](force_dream/client.py)

<details>
<summary><code>def get_agent_reliability(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReliabilityListResult, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Used by all three SDKs to merge live `health` data into agent search results. A reliability-fetch failure never blocks the core agent listing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_agent_reliability()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReliabilityListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.get_agent_reliability()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReliabilityListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[ReliabilityListResult](force_dream/models/reliability_list_result.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReliabilityListResult](force_dream/models/reliability_list_result.py)</code> -- Reliability data for all agents

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_balance(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BalanceResult, GetBalanceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_balance()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BalanceResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBalanceErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.get_balance()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BalanceResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBalanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[BalanceResult](force_dream/models/balance_result.py), [GetBalanceErrorBody](force_dream/errors/get_balance_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BalanceResult](force_dream/models/balance_result.py)</code> -- Current balance

**On `Failure`**: `error` is <code>[GetBalanceErrorBody](force_dream/errors/get_balance_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthorized1](force_dream/models/unauthorized1.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_invoke_result(slug: str, task_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InvokeResult, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real polling contract used identically by all three official SDKs: start polling at a
2500ms interval, add 1000ms after each attempt, cap at 6000ms, bounded by a caller-set
total wait (default 60s, min 5s, max 120s). The response's `status` (or `outcome`)
field distinguishes `completed`/`succeeded`, `insufficient` (agent honestly declined --
charged nothing), `charge_failed`, `failed`/`dead_letter`, or still-pending (any other
value, including the field being absent).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_invoke_result("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvokeResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.get_invoke_result("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvokeResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | Value sent with the request. |
| <code>task_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[InvokeResult](force_dream/models/invoke_result.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[InvokeResult](force_dream/models/invoke_result.py)</code> -- Current task state (may still be pending)

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_proof(task_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WorkforceProofPublicResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Returns the real proof object needed for client-side Ed25519 verification. **Honest gap**: the exact behavior for a task_id that has not yet completed (404, a 200 with a null proof, or otherwise) is not directly confirmed by tonight's testing -- every real verification tested used an already-completed task. Documented as `200` below for the confirmed case only; do not assume the shape of an unconfirmed case.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_proof("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkforceProofPublicResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.get_proof("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkforceProofPublicResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[V1WorkforceProofPublicResponse](force_dream/models/v1_workforce_proof_public_response.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WorkforceProofPublicResponse](force_dream/models/v1_workforce_proof_public_response.py)</code> -- Proof found (confirmed only for already-completed tasks)

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_proof_public_key(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WorkforceProofPublicKeyResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Required to verify any proof's signature.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_proof_public_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkforceProofPublicKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.get_proof_public_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkforceProofPublicKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[V1WorkforceProofPublicKeyResponse](force_dream/models/v1_workforce_proof_public_key_response.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WorkforceProofPublicKeyResponse](force_dream/models/v1_workforce_proof_public_key_response.py)</code> -- Public key

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invoke_agent(slug: str, body: V1AgentsInvokeRequest | V1AgentsInvokeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AgentsInvokeResponse, InvokeAgentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Spends your balance -- requires an `fd_live_` key. Enqueues the task and returns immediately; it does not wait for completion. Poll `/v1/agents/{slug}/result/{taskId}` for the outcome. Never call this again for the same logical task after a timeout -- re-invoking would double-charge.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.invoke_agent("data-extract-v1", V1AgentsInvokeRequest(task="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AgentsInvokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvokeAgentErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.invoke_agent(
    "data-extract-v1", V1AgentsInvokeRequest(task="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AgentsInvokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvokeAgentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[V1AgentsInvokeRequest](force_dream/models/v1_agents_invoke_request.py) \| [V1AgentsInvokeRequestDict](force_dream/models/v1_agents_invoke_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[V1AgentsInvokeResponse](force_dream/models/v1_agents_invoke_response.py), [InvokeAgentErrorBody](force_dream/errors/invoke_agent_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AgentsInvokeResponse](force_dream/models/v1_agents_invoke_response.py)</code> -- Task enqueued

**On `Failure`**: `error` is <code>[InvokeAgentErrorBody](force_dream/errors/invoke_agent_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthorized1](force_dream/models/unauthorized1.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_agents(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AgentListResult, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless -- no account needed. Real, load-bearing fact confirmed directly from the
source, not assumed: **this endpoint has no working server-side capability or query
filter.** All three official SDKs fetch the full list and filter client-side. A prior
draft of the OpenAPI scope for this spec listed a nonexistent `/v1/agents/search`
endpoint; it does not exist. Filter client-side against this endpoint's full response
instead, exactly as the official SDKs do.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.list_agents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AgentListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.list_agents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AgentListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[AgentListResult](force_dream/models/agent_list_result.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[AgentListResult](force_dream/models/agent_list_result.py)</code> -- Full agent registry

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def signup(body: ApiSignupRequest | ApiSignupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignupResult, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No API key required -- this is how you get one. Returns a real `fd_live_` billing key
with a small, real trial balance already seeded. Verified live, repeatedly, across all
three SDKs tonight.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.signup(ApiSignupRequest(email="user@example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.signup(ApiSignupRequest(email="user@example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiSignupRequest](force_dream/models/api_signup_request.py) \| [ApiSignupRequestDict](force_dream/models/api_signup_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;[SignupResult](force_dream/models/signup_result.py), [RawError](force_dream/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignupResult](force_dream/models/signup_result.py)</code> -- Account created

**On `Failure`**: `error` is <code>[RawError](force_dream/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

