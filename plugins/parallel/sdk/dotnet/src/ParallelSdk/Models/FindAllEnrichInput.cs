using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Input model for FindAll enrich.
/// </summary>
public record FindAllEnrichInput
{
    /// <summary>
    /// Processor to use for the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processor")]
    public string? Processor { get; init; } = "core";

    /// <summary>
    /// JSON schema for the enrichment output schema for the FindAll run.
    /// </summary>
    [JsonPropertyName("output_schema")]
    public required JsonSchema2 OutputSchema { get; init; }

    /// <summary>
    /// List of MCP servers to use for the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcp_servers")]
    public McpServers? McpServers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
