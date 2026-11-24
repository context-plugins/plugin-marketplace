<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mcp — operations

Accessor: `client.mcp` · Source: `agent_ready/apis/mcp.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.mcp.scan_mcp

- **Route**: `POST /api/v1/scan/mcp`
- **Signature**: `def scan_mcp(body: McpScanRequest | McpScanRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `McpScanResponse`
- **Returns (raw)**: `ApiResult[McpScanResponse, ScanMcpErrorBody]`
- **Error**: `ScanMcpErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 429, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `McpScanRequest` | `agent_ready/models/mcp_scan_request.py` |
| `McpScanRequestDict` | `agent_ready/models/mcp_scan_request.py` |
| `McpScanResponse` | `agent_ready/models/mcp_scan_response.py` |
| `ScanMcpErrorBody` | `agent_ready/errors/scan_mcp_error.py` |
| `Error` | `agent_ready/models/error.py` |

