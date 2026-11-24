using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// An NLWeb result object.
/// </summary>
public record AskResult
{
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("site")]
    public required string Site { get; init; }

    /// <summary>
    /// Relevance score (BM25).
    /// </summary>
    [JsonPropertyName("score")]
    public required double Score { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Schema.org JSON-LD for a result.
    /// </summary>
    [JsonPropertyName("schema_object")]
    public required SchemaObject SchemaObject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
