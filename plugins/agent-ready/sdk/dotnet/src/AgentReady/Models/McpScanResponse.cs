using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// Result of POST /api/v1/scan/mcp.
/// </summary>
public record McpScanResponse
{
    /// <summary>
    /// Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent of the site Vercel score.
    /// </summary>
    [JsonPropertyName("scan")]
    public required McpScan Scan { get; init; }

    [JsonPropertyName("shareUrl")]
    public required string ShareUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
