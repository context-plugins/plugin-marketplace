# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AgentReadyClient](agent_ready/client.py)

## Mcp

> Source: [Mcp](agent_ready/apis/mcp.py)

<details>
<summary><code>def scan_mcp(body: McpScanRequest | McpScanRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[McpScanResponse, ScanMcpErrorBody]</code></summary>

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

**Sync**

```python
result = client.mcp.with_raw_response.scan_mcp(McpScanRequest(endpoint="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type McpScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScanMcpErrorBody
```

**Async**

```python
result = await async_client.mcp.with_raw_response.scan_mcp(McpScanRequest(endpoint="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type McpScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScanMcpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[McpScanRequest](agent_ready/models/mcp_scan_request.py) \| [McpScanRequestDict](agent_ready/models/mcp_scan_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[McpScanResponse](agent_ready/models/mcp_scan_response.py), [ScanMcpErrorBody](agent_ready/errors/scan_mcp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[McpScanResponse](agent_ready/models/mcp_scan_response.py)</code> -- The MCP server scan result and its shareable report URL.

**On `Failure`**: `error` is <code>[ScanMcpErrorBody](agent_ready/errors/scan_mcp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 502 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NlWeb

> Source: [NlWeb](agent_ready/apis/nl_web.py)

<details>
<summary><code>def ask_get(query: str, *, mode: ModeOrStr | None = None, item_type: ItemType3OrStr | None = None, stream: StreamOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AskResponse1, AskGetErrorBody]</code></summary>

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

**Sync**

```python
result = client.nl_web.with_raw_response.ask_get("how is the score calculated?")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskGetErrorBody
```

**Async**

```python
result = await async_client.nl_web.with_raw_response.ask_get("how is the score calculated?")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | Value sent with the request. |
| <code>mode</code> | <code>[ModeOrStr](agent_ready/models/enums/mode.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>item_type</code> | <code>[ItemType3OrStr](agent_ready/models/enums/item_type3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>stream</code> | <code>[StreamOrStr](agent_ready/models/enums/stream.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[AskResponse1](agent_ready/models/unions/ask_response1.py), [AskGetErrorBody](agent_ready/errors/ask_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AskResponse1](agent_ready/models/unions/ask_response1.py)</code> -- An NLWeb answer.

**On `Failure`**: `error` is <code>[AskGetErrorBody](agent_ready/errors/ask_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500, 503 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ask_post(body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AskResponse1, AskPostErrorBody]</code></summary>

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

**Sync**

```python
result = client.nl_web.with_raw_response.ask_post(AskRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskPostErrorBody
```

**Async**

```python
result = await async_client.nl_web.with_raw_response.ask_post(AskRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AskRequest](agent_ready/models/ask_request.py) \| [AskRequestDict](agent_ready/models/ask_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[AskResponse1](agent_ready/models/unions/ask_response1.py), [AskPostErrorBody](agent_ready/errors/ask_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AskResponse1](agent_ready/models/unions/ask_response1.py)</code> -- An NLWeb answer.

**On `Failure`**: `error` is <code>[AskPostErrorBody](agent_ready/errors/ask_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500, 503 | <code>[Error](agent_ready/models/error.py)</code> |
| 404 | <code>[AskResponse1](agent_ready/models/unions/ask_response1.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](agent_ready/apis/scans.py)

<details>
<summary><code>def get_scan(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Scan, GetScanErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.get_scan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Scan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.get_scan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Scan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Scan id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[Scan](agent_ready/models/scan.py), [GetScanErrorBody](agent_ready/errors/get_scan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Scan](agent_ready/models/scan.py)</code> -- Scan.

**On `Failure`**: `error` is <code>[GetScanErrorBody](agent_ready/errors/get_scan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_scans(*, limit: int | None = None, cursor: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScanListResponse, ListScansErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.list_scans(cursor=datetime(2026, 4, 19, 0, 0, 0, tzinfo=timezone.utc))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScansErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.list_scans(
    cursor=datetime(2026, 4, 19, 0, 0, 0, tzinfo=timezone.utc)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScanListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>RFC3339DateTime \| None</code> | Opaque pagination cursor (ISO 8601 datetime returned as `nextCursor` by a previous response). Returns scans strictly older than the cursor.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[ScanListResponse](agent_ready/models/scan_list_response.py), [ListScansErrorBody](agent_ready/errors/list_scans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScanListResponse](agent_ready/models/scan_list_response.py)</code> -- Scan list.

**On `Failure`**: `error` is <code>[ListScansErrorBody](agent_ready/errors/list_scans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500, 503 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_scan(body: StartScanRequest | StartScanRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartScanResponse, StartScanErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.start_scan(
    StartScanRequest(url="https://example.com"), idempotency_key="scan-2026-06-01-abc123"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartScanErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.start_scan(
    StartScanRequest(url="https://example.com"), idempotency_key="scan-2026-06-01-abc123"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartScanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartScanRequest](agent_ready/models/start_scan_request.py) \| [StartScanRequestDict](agent_ready/models/start_scan_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to retry. The same key replays the original response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[StartScanResponse](agent_ready/models/start_scan_response.py), [StartScanErrorBody](agent_ready/errors/start_scan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartScanResponse](agent_ready/models/start_scan_response.py)</code> -- Scan queued. The `Location` response header carries the polling URL (per RFC 7231 §6.3.3); the same URL is also returned as `pollUrl` in the body.

**On `Failure`**: `error` is <code>[StartScanErrorBody](agent_ready/errors/start_scan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 422, 429, 500, 503 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def x402_scan(body: ApiX402ScanRequest | ApiX402ScanRequestDict, *, x_payment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaidScanResponse, X402ScanErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.x402_scan(ApiX402ScanRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaidScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type X402ScanErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.x402_scan(ApiX402ScanRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaidScanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type X402ScanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiX402ScanRequest](agent_ready/models/api_x402_scan_request.py) \| [ApiX402ScanRequestDict](agent_ready/models/api_x402_scan_request.py)</code> | The request body. |
| <code>x_payment</code> | <code>str \| None</code> | Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;[PaidScanResponse](agent_ready/models/paid_scan_response.py), [X402ScanErrorBody](agent_ready/errors/x402_scan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaidScanResponse](agent_ready/models/paid_scan_response.py)</code> -- Payment verified and the scan completed. The `X-PAYMENT-RESPONSE` header carries the settlement.

**On `Failure`**: `error` is <code>[X402ScanErrorBody](agent_ready/errors/x402_scan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 502 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def x402_scan_challenge(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, X402ScanChallengeErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.x402_scan_challenge()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type X402ScanChallengeErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.x402_scan_challenge()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type X402ScanChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](agent_ready/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](agent_ready/core/results.py)&#91;None, [X402ScanChallengeErrorBody](agent_ready/errors/x402_scan_challenge_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[X402ScanChallengeErrorBody](agent_ready/errors/x402_scan_challenge_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[Error](agent_ready/models/error.py)</code> |
| anything unmapped | <code>[RawError](agent_ready/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

