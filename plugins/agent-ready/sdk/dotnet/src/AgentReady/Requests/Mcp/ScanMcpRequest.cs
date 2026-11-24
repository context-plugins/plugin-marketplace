using AgentReady.Models;

namespace AgentReady.Requests.Mcp;

/// <summary>
/// The inputs of the ScanMcp operation.
/// </summary>
public sealed record ScanMcpRequest
{
    public required McpScanRequest Body { get; init; }
}
