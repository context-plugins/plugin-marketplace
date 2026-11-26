# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ForceDreamClient](src/ForceDream/ForceDreamClient.cs)

<details>
<summary><code>Task&lt;ReliabilityListResult&gt; GetAgentReliability(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GetAgentReliability();
    // TODO: Handle 'response' of type ReliabilityListResult
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReliabilityListResult](src/ForceDream/Models/ReliabilityListResult.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BalanceResult&gt; GetBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GetBalance();
    // TODO: Handle 'response' of type BalanceResult
}
catch (ApiException<GetBalanceError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceResult](src/ForceDream/Models/BalanceResult.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[GetBalanceError](src/ForceDream/Errors/GetBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InvokeResult&gt; GetInvokeResult(GetInvokeResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GetInvokeResult(new GetInvokeResultRequest
    {
        Slug = "some example string",
        TaskId = "some example string",
    });
    // TODO: Handle 'response' of type InvokeResult
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInvokeResultRequest](src/ForceDream/Requests/GetInvokeResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvokeResult](src/ForceDream/Models/InvokeResult.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WorkforceProofPublicResponse&gt; GetProof(GetProofRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GetProof(new GetProofRequest { TaskId = "some example string" });
    // TODO: Handle 'response' of type V1WorkforceProofPublicResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProofRequest](src/ForceDream/Requests/GetProofRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorkforceProofPublicResponse](src/ForceDream/Models/V1WorkforceProofPublicResponse.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WorkforceProofPublicKeyResponse&gt; GetProofPublicKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GetProofPublicKey();
    // TODO: Handle 'response' of type V1WorkforceProofPublicKeyResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorkforceProofPublicKeyResponse](src/ForceDream/Models/V1WorkforceProofPublicKeyResponse.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AgentsInvokeResponse&gt; InvokeAgent(InvokeAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InvokeAgent(new InvokeAgentRequest
    {
        Slug = "data-extract-v1",
        Body = new V1AgentsInvokeRequest { Task = "some example string" },
    });
    // TODO: Handle 'response' of type V1AgentsInvokeResponse
}
catch (ApiException<InvokeAgentError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InvokeAgentRequest](src/ForceDream/Requests/InvokeAgentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AgentsInvokeResponse](src/ForceDream/Models/V1AgentsInvokeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[InvokeAgentError](src/ForceDream/Errors/InvokeAgentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AgentListResult&gt; ListAgents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ListAgents();
    // TODO: Handle 'response' of type AgentListResult
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentListResult](src/ForceDream/Models/AgentListResult.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignupResult&gt; Signup(SignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Signup(new SignupRequest
    {
        Body = new ApiSignupRequest { Email = "user@example.com" },
    });
    // TODO: Handle 'response' of type SignupResult
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SignupRequest](src/ForceDream/Requests/SignupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupResult](src/ForceDream/Models/SignupResult.cs)</code>

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ForceDream/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

