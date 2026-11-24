<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mcp — operations

Accessor: `client.mcp` · Source: `src/resources/mcp.ts` · 1 operation · Request and error types: namespace `Mcp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `agent-ready`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### scanMcp

- **Signature**: `scanMcp(request: Mcp.ScanMcpRequest, options?: RequestOptions): ApiPromise<McpScanResponse, Mcp.ScanMcpError>`
- **Wire**: `POST /api/v1/scan/mcp`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `McpScanResponse`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Mcp.ScanMcpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [429] `Error` · `"error3"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mcp.ScanMcpRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `McpScanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `McpScanRequest` | `mcpScanRequestSchema` | `src/models/mcp-scan-request.ts` |
| `McpScanResponse` | `mcpScanResponseSchema` | `src/models/mcp-scan-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

