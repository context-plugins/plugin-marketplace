# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AgentReadyClient](src/AgentReady/AgentReadyClient.cs)

## Mcp

> Source: [Mcp](src/AgentReady/Api/Mcp.cs)

<details>
<summary><code>Task&lt;McpScanResponse&gt; ScanMcp(ScanMcpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources, and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mcp.ScanMcp(new ScanMcpRequest
    {
        Body = new McpScanRequest { Endpoint = "https://example.com" },
    });
    // TODO: Handle 'response' of type McpScanResponse
}
catch (ApiException<ScanMcpError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ScanMcpRequest](src/AgentReady/Requests/Mcp/ScanMcpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[McpScanResponse](src/AgentReady/Models/McpScanResponse.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[ScanMcpError](src/AgentReady/Errors/ScanMcpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NlWeb

> Source: [NlWeb](src/AgentReady/Api/NlWeb.cs)

<details>
<summary><code>Task&lt;AskResponse1&gt; AskGet(AskGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides, glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org `schema_object`. Set stream=true for Server-Sent Events. Also served at the root path /ask.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NlWeb.AskGet(new AskGetRequest { Query = "how is the score calculated?" });
    // TODO: Handle 'response' of type AskResponse1
}
catch (ApiException<AskGetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AskGetRequest](src/AgentReady/Requests/NlWeb/AskGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AskResponse1](src/AgentReady/Models/AnyOf/AskResponse1.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[AskGetError](src/AgentReady/Errors/AskGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AskResponse1&gt; AskPost(AskPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET form. Public — no API key required.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NlWeb.AskPost(new AskPostRequest
    {
        Body = new AskRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type AskResponse1
}
catch (ApiException<AskPostError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AskPostRequest](src/AgentReady/Requests/NlWeb/AskPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AskResponse1](src/AgentReady/Models/AnyOf/AskResponse1.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[AskPostError](src/AgentReady/Errors/AskPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](src/AgentReady/Api/Scans.cs)

<details>
<summary><code>Task&lt;Scan&gt; GetScan(GetScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by the API key's user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.GetScan(new GetScanRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Scan
}
catch (ApiException<GetScanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScanRequest](src/AgentReady/Requests/Scans/GetScanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Scan](src/AgentReady/Models/Scan.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[GetScanError](src/AgentReady/Errors/GetScanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScanListResponse&gt; ListScans(ListScansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the `nextCursor` value from a previous response as the `cursor` query parameter on the next request; `nextCursor` is only returned when the page filled exactly to `limit`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.ListScans(new ListScansRequest
    {
        Cursor = DateTimeOffset.Parse("2026-04-19T00:00:00Z"),
    });
    // TODO: Handle 'response' of type ScanListResponse
}
catch (ApiException<ListScansError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListScansRequest](src/AgentReady/Requests/Scans/ListScansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScanListResponse](src/AgentReady/Models/ScanListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[ListScansError](src/AgentReady/Errors/ListScansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartScanResponse&gt; StartScan(StartScanOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is 'completed' or 'failed'.

Supply an optional `Idempotency-Key` header to make retries safe: the first request runs the scan and any retry carrying the same key replays the original 202 (with `Idempotency-Replayed: true`) instead of starting a duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is still in flight returns 409. Keys are retained for 24 hours.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.StartScan(new StartScanOperationRequest
    {
        IdempotencyKey = "scan-2026-06-01-abc123",
        Body = new StartScanRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type StartScanResponse
}
catch (ApiException<StartScanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartScanOperationRequest](src/AgentReady/Requests/Scans/StartScanOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartScanResponse](src/AgentReady/Models/StartScanResponse.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[StartScanError](src/AgentReady/Errors/StartScanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaidScanResponse&gt; X402Scan(X402ScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid `X-PAYMENT` header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and resend the v2 payment payload in the `X-PAYMENT` header to run the scan. Settlement is on Base mainnet (CAIP-2 eip155:8453; the facilitator pays gas); the response carries an `X-PAYMENT-RESPONSE` header. Tiers: $0.02 (25 pages), $0.25 (250 pages).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.X402Scan(new X402ScanRequest
    {
        Body = new ApiX402ScanRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type PaidScanResponse
}
catch (ApiException<X402ScanError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[X402ScanRequest](src/AgentReady/Requests/Scans/X402ScanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaidScanResponse](src/AgentReady/Models/PaidScanResponse.cs)</code>

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[X402ScanError](src/AgentReady/Errors/X402ScanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task X402ScanChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 `PAYMENT-REQUIRED` response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Scans.X402ScanChallenge();
}
catch (ApiException<X402ScanChallengeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AgentReady/Core/Exceptions/ApiException.cs)&lt;[X402ScanChallengeError](src/AgentReady/Errors/X402ScanChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

