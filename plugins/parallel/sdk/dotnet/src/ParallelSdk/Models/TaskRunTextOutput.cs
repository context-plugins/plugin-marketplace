using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Output from a task that returns text.
/// </summary>
public record TaskRunTextOutput
{
    /// <summary>
    /// Basis for the output. The basis has a single field 'output'.
    /// </summary>
    [JsonPropertyName("basis")]
    public required IReadOnlyList<FieldBasis> Basis { get; init; }

    /// <summary>
    /// The type of output being returned, as determined by the output schema of the task spec.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "text";

    /// <summary>
    /// MCP tool calls made by the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcp_tool_calls")]
    public McpToolCalls? McpToolCalls { get; init; }

    /// <summary>
    /// Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beta_fields")]
    public BetaFields? BetaFields { get; init; }

    /// <summary>
    /// Text output from the task.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
