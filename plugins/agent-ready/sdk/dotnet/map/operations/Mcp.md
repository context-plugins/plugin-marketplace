<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mcp — operations

Accessor: `client.Mcp` · Source: `src/AgentReady/Api/Mcp.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ScanMcp

- **Signature**: `ScanMcp(ScanMcpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `McpScanResponse`
- **Error**: `ApiException<ScanMcpError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 429, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScanMcpRequest` | `src/AgentReady/Requests/Mcp/ScanMcpRequest.cs` |
| `McpScanRequest` | `src/AgentReady/Models/McpScanRequest.cs` |
| `McpScanResponse` | `src/AgentReady/Models/McpScanResponse.cs` |
| `ScanMcpError` | `src/AgentReady/Errors/ScanMcpError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

