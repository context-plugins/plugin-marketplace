using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// MCP server configuration.
/// </summary>
public record McpServerParallelAiTasksApi
{
    /// <summary>
    /// Type of MCP server being configured. Always <c>url</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type4ParallelAiTasksApi? Type { get; init; } = Type4ParallelAiTasksApi.Url;

    /// <summary>
    /// URL of the MCP server.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Headers for the MCP server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public Headers? Headers { get; init; }

    /// <summary>
    /// Name of the MCP server.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// List of allowed tools for the MCP server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowed_tools")]
    public AllowedTools? AllowedTools { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
