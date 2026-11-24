using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Output from a task that returns JSON.
/// </summary>
public record TaskRunJsonOutput
{
    /// <summary>
    /// Basis for each top-level field in the JSON output. Per-list-element basis entries are available only when the <c>parallel-beta: field-basis-2025-11-25</c> header is supplied.
    /// </summary>
    [JsonPropertyName("basis")]
    public required IReadOnlyList<FieldBasis> Basis { get; init; }

    /// <summary>
    /// The type of output being returned, as determined by the output schema of the task spec.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "json";

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
    /// Output from the task as a native JSON object, as determined by the output schema of the task spec.
    /// </summary>
    [JsonPropertyName("content")]
    public required object Content { get; init; }

    /// <summary>
    /// Output schema for the Task Run. Populated only if the task was executed with an auto schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output_schema")]
    public OutputSchema? OutputSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
