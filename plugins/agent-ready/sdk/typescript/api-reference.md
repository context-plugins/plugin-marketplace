# Reference

> Source: [AgentReadyClient](src/client.ts)

## Mcp

> Source: [Mcp](src/resources/mcp.ts)

<details>
<summary><code>scanMcp(request: Mcp.ScanMcpRequest, options?: RequestOptions): ApiPromise&lt;McpScanResponse, Mcp.ScanMcpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources, and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mcp.scanMcp({ body: { endpoint: "https://example.com" } });
  // TODO: Handle 'response' of type McpScanResponse
} catch (err) {
  // TODO: Handle 'err' of type Mcp.ScanMcpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mcp.scanMcp({ body: { endpoint: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type McpScanResponse
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
| <code>body</code> | <code>[McpScanRequest](src/models/mcp-scan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mcp.scanMcp(request)`

- **OnSuccess**: <code>[McpScanResponse](src/models/mcp-scan-response.ts)</code>
- **OnError**: throws <code>[Mcp.ScanMcpError](src/resources/mcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mcp.scanMcp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;McpScanResponse, Mcp.ScanMcpError&gt;</code>, with `result.value` of type <code>[McpScanResponse](src/models/mcp-scan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NlWeb

> Source: [NlWeb](src/resources/nl-web.ts)

<details>
<summary><code>askGet(request: NlWeb.AskGetRequest, options?: RequestOptions): ApiPromise&lt;AskResponse1, NlWeb.AskGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides, glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org `schema_object`. Set stream=true for Server-Sent Events. Also served at the root path /ask.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nlWeb.askGet({ query: "how is the score calculated?" });
  // TODO: Handle 'response' of type AskResponse1
} catch (err) {
  // TODO: Handle 'err' of type NlWeb.AskGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nlWeb.askGet({ query: "how is the score calculated?" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AskResponse1
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
| <code>query</code> | <code>string</code> | - |
| <code>mode?</code> | <code>[Mode](src/models/mode.ts)</code> | - |
| <code>itemType?</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>stream?</code> | <code>[Stream](src/models/stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nlWeb.askGet(request)`

- **OnSuccess**: <code>[AskResponse1](src/models/unions/ask-response1.ts)</code>
- **OnError**: throws <code>[NlWeb.AskGetError](src/resources/nl-web.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.nlWeb.askGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AskResponse1, NlWeb.AskGetError&gt;</code>, with `result.value` of type <code>[AskResponse1](src/models/unions/ask-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>askPost(request: NlWeb.AskPostRequest, options?: RequestOptions): ApiPromise&lt;AskResponse1, NlWeb.AskPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET form. Public — no API key required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nlWeb.askPost({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type AskResponse1
} catch (err) {
  // TODO: Handle 'err' of type NlWeb.AskPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nlWeb.askPost({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AskResponse1
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
| <code>body</code> | <code>[AskRequest](src/models/ask-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nlWeb.askPost(request)`

- **OnSuccess**: <code>[AskResponse1](src/models/unions/ask-response1.ts)</code>
- **OnError**: throws <code>[NlWeb.AskPostError](src/resources/nl-web.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.nlWeb.askPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AskResponse1, NlWeb.AskPostError&gt;</code>, with `result.value` of type <code>[AskResponse1](src/models/unions/ask-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](src/resources/scans.ts)

<details>
<summary><code>getScan(request: Scans.GetScanRequest, options?: RequestOptions): ApiPromise&lt;Scan, Scans.GetScanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by the API key's user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.getScan({ id: "some example string" });
  // TODO: Handle 'response' of type Scan
} catch (err) {
  // TODO: Handle 'err' of type Scans.GetScanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.getScan({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Scan
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
| <code>id</code> | <code>string</code> | Scan id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.getScan(request)`

- **OnSuccess**: <code>[Scan](src/models/scan.ts)</code>
- **OnError**: throws <code>[Scans.GetScanError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.getScan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Scan, Scans.GetScanError&gt;</code>, with `result.value` of type <code>[Scan](src/models/scan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScans(request?: Scans.ListScansRequest, options?: RequestOptions): ApiPromise&lt;ScanListResponse, Scans.ListScansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the `nextCursor` value from a previous response as the `cursor` query parameter on the next request; `nextCursor` is only returned when the page filled exactly to `limit`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.listScans({ cursor: new Date(Date.UTC(2026, 3, 19, 0, 0, 0)) });
  // TODO: Handle 'response' of type ScanListResponse
} catch (err) {
  // TODO: Handle 'err' of type Scans.ListScansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans
  .listScans({ cursor: new Date(Date.UTC(2026, 3, 19, 0, 0, 0)) })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScanListResponse
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
| <code>limit?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>Date</code> (date-time) | Opaque pagination cursor (ISO 8601 datetime returned as `nextCursor` by a previous response). Returns scans strictly older than the cursor. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.listScans(request)`

- **OnSuccess**: <code>[ScanListResponse](src/models/scan-list-response.ts)</code>
- **OnError**: throws <code>[Scans.ListScansError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.listScans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScanListResponse, Scans.ListScansError&gt;</code>, with `result.value` of type <code>[ScanListResponse](src/models/scan-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startScan(request: Scans.StartScanRequestParams, options?: RequestOptions): ApiPromise&lt;StartScanResponse, Scans.StartScanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is 'completed' or 'failed'.

Supply an optional `Idempotency-Key` header to make retries safe: the first request runs the scan and any retry carrying the same key replays the original 202 (with `Idempotency-Replayed: true`) instead of starting a duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is still in flight returns 409. Keys are retained for 24 hours.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.startScan({
    idempotencyKey: "scan-2026-06-01-abc123",
    body: { url: "https://example.com" },
  });
  // TODO: Handle 'response' of type StartScanResponse
} catch (err) {
  // TODO: Handle 'err' of type Scans.StartScanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans
  .startScan({ idempotencyKey: "scan-2026-06-01-abc123", body: { url: "https://example.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartScanResponse
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
| <code>idempotencyKey?</code> | <code>string</code> | Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to retry. The same key replays the original response. |
| <code>body</code> | <code>[StartScanRequest](src/models/start-scan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.startScan(request)`

- **OnSuccess**: <code>[StartScanResponse](src/models/start-scan-response.ts)</code>
- **OnError**: throws <code>[Scans.StartScanError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.startScan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartScanResponse, Scans.StartScanError&gt;</code>, with `result.value` of type <code>[StartScanResponse](src/models/start-scan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>x402Scan(request: Scans.X402ScanRequest, options?: RequestOptions): ApiPromise&lt;PaidScanResponse, Scans.X402ScanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid `X-PAYMENT` header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and resend the v2 payment payload in the `X-PAYMENT` header to run the scan. Settlement is on Base mainnet (CAIP-2 eip155:8453; the facilitator pays gas); the response carries an `X-PAYMENT-RESPONSE` header. Tiers: $0.02 (25 pages), $0.25 (250 pages).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scans.x402Scan({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type PaidScanResponse
} catch (err) {
  // TODO: Handle 'err' of type Scans.X402ScanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.x402Scan({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaidScanResponse
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
| <code>xPayment?</code> | <code>string</code> | Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge. |
| <code>body</code> | <code>[ApiX402ScanRequest](src/models/api-x402-scan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.x402Scan(request)`

- **OnSuccess**: <code>[PaidScanResponse](src/models/paid-scan-response.ts)</code>
- **OnError**: throws <code>[Scans.X402ScanError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.x402Scan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaidScanResponse, Scans.X402ScanError&gt;</code>, with `result.value` of type <code>[PaidScanResponse](src/models/paid-scan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>x402ScanChallenge(options?: RequestOptions): ApiPromise&lt;undefined, Scans.X402ScanChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 `PAYMENT-REQUIRED` response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scans.x402ScanChallenge();
} catch (err) {
  // TODO: Handle 'err' of type Scans.X402ScanChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scans.x402ScanChallenge().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scans.x402ScanChallenge()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Scans.X402ScanChallengeError](src/resources/scans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scans.x402ScanChallenge().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Scans.X402ScanChallengeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AgentReadyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

