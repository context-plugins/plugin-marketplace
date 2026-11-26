# Reference

> Source: [ForceDreamClient](src/client.ts)

<details>
<summary><code>getAgentReliability(options?: RequestOptions): ApiPromise&lt;ReliabilityListResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Used by all three SDKs to merge live `health` data into agent search results. A reliability-fetch failure never blocks the core agent listing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getAgentReliability();
  // TODO: Handle 'response' of type ReliabilityListResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getAgentReliability().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReliabilityListResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getAgentReliability()`

- **OnSuccess**: <code>[ReliabilityListResult](src/models/reliability-list-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.getAgentReliability().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReliabilityListResult, ApiError&gt;</code>, with `result.value` of type <code>[ReliabilityListResult](src/models/reliability-list-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalance(options?: RequestOptions): ApiPromise&lt;BalanceResult, ForceDreamClient.GetBalanceError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getBalance();
  // TODO: Handle 'response' of type BalanceResult
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.GetBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getBalance().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BalanceResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getBalance()`

- **OnSuccess**: <code>[BalanceResult](src/models/balance-result.ts)</code>
- **OnError**: throws <code>[ForceDreamClient.GetBalanceError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getBalance().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BalanceResult, ForceDreamClient.GetBalanceError&gt;</code>, with `result.value` of type <code>[BalanceResult](src/models/balance-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInvokeResult(request: ForceDreamClient.GetInvokeResultRequest, options?: RequestOptions): ApiPromise&lt;InvokeResult, ApiError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getInvokeResult({
    slug: "some example string",
    taskId: "some example string",
  });
  // TODO: Handle 'response' of type InvokeResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getInvokeResult({ slug: "some example string", taskId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvokeResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | - |
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getInvokeResult(request)`

- **OnSuccess**: <code>[InvokeResult](src/models/invoke-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.getInvokeResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvokeResult, ApiError&gt;</code>, with `result.value` of type <code>[InvokeResult](src/models/invoke-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProof(request: ForceDreamClient.GetProofRequest, options?: RequestOptions): ApiPromise&lt;V1WorkforceProofPublicResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Returns the real proof object needed for client-side Ed25519 verification. **Honest gap**: the exact behavior for a task_id that has not yet completed (404, a 200 with a null proof, or otherwise) is not directly confirmed by tonight's testing -- every real verification tested used an already-completed task. Documented as `200` below for the confirmed case only; do not assume the shape of an unconfirmed case.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getProof({ taskId: "some example string" });
  // TODO: Handle 'response' of type V1WorkforceProofPublicResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getProof({ taskId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WorkforceProofPublicResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getProof(request)`

- **OnSuccess**: <code>[V1WorkforceProofPublicResponse](src/models/v1-workforce-proof-public-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.getProof(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WorkforceProofPublicResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1WorkforceProofPublicResponse](src/models/v1-workforce-proof-public-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProofPublicKey(options?: RequestOptions): ApiPromise&lt;V1WorkforceProofPublicKeyResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. Required to verify any proof's signature.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getProofPublicKey();
  // TODO: Handle 'response' of type V1WorkforceProofPublicKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getProofPublicKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WorkforceProofPublicKeyResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getProofPublicKey()`

- **OnSuccess**: <code>[V1WorkforceProofPublicKeyResponse](src/models/v1-workforce-proof-public-key-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.getProofPublicKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WorkforceProofPublicKeyResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1WorkforceProofPublicKeyResponse](src/models/v1-workforce-proof-public-key-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invokeAgent(request: ForceDreamClient.InvokeAgentRequest, options?: RequestOptions): ApiPromise&lt;V1AgentsInvokeResponse, ForceDreamClient.InvokeAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Spends your balance -- requires an `fd_live_` key. Enqueues the task and returns immediately; it does not wait for completion. Poll `/v1/agents/{slug}/result/{taskId}` for the outcome. Never call this again for the same logical task after a timeout -- re-invoking would double-charge.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invokeAgent({
    slug: "data-extract-v1",
    body: { task: "some example string" },
  });
  // TODO: Handle 'response' of type V1AgentsInvokeResponse
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.InvokeAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .invokeAgent({ slug: "data-extract-v1", body: { task: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AgentsInvokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | - |
| <code>body</code> | <code>[V1AgentsInvokeRequest](src/models/v1-agents-invoke-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invokeAgent(request)`

- **OnSuccess**: <code>[V1AgentsInvokeResponse](src/models/v1-agents-invoke-response.ts)</code>
- **OnError**: throws <code>[ForceDreamClient.InvokeAgentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invokeAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AgentsInvokeResponse, ForceDreamClient.InvokeAgentError&gt;</code>, with `result.value` of type <code>[V1AgentsInvokeResponse](src/models/v1-agents-invoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgents(options?: RequestOptions): ApiPromise&lt;AgentListResult, ApiError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listAgents();
  // TODO: Handle 'response' of type AgentListResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listAgents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentListResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listAgents()`

- **OnSuccess**: <code>[AgentListResult](src/models/agent-list-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.listAgents().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentListResult, ApiError&gt;</code>, with `result.value` of type <code>[AgentListResult](src/models/agent-list-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signup(request: ForceDreamClient.SignupRequest, options?: RequestOptions): ApiPromise&lt;SignupResult, ApiError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup({ body: { email: "user@example.com" } });
  // TODO: Handle 'response' of type SignupResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup({ body: { email: "user@example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiSignupRequest](src/models/api-signup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup(request)`

- **OnSuccess**: <code>[SignupResult](src/models/signup-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.signup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupResult, ApiError&gt;</code>, with `result.value` of type <code>[SignupResult](src/models/signup-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

