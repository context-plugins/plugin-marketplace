using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;

namespace AgentReady.Models;

/// <summary>
/// Body for POST /api/v1/scan/mcp. A remote http(s) MCP endpoint (Streamable HTTP).
/// </summary>
public record McpScanRequest
{
    [JsonPropertyName("endpoint")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public required string Endpoint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
