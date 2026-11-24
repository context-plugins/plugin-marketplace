using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Result of an MCP tool call.
/// </summary>
public record McpToolCall
{
    /// <summary>
    /// Identifier for the tool call.
    /// </summary>
    [JsonPropertyName("tool_call_id")]
    public required string ToolCallId { get; init; }

    /// <summary>
    /// Name of the MCP server.
    /// </summary>
    [JsonPropertyName("server_name")]
    public required string ServerName { get; init; }

    /// <summary>
    /// Name of the tool being called.
    /// </summary>
    [JsonPropertyName("tool_name")]
    public required string ToolName { get; init; }

    /// <summary>
    /// Arguments used to call the MCP tool.
    /// </summary>
    [JsonPropertyName("arguments")]
    public required string Arguments { get; init; }

    /// <summary>
    /// Output received from the tool call, if successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public ContentParallelAiMonitorApi? Content { get; init; }

    /// <summary>
    /// Error message if the tool call failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error2ParallelAiMonitorApi? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
