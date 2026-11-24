using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Successful NLWeb answer.
/// </summary>
public record AskAnswer
{
    /// <summary>
    /// NLWeb response envelope metadata.
    /// </summary>
    [JsonPropertyName("_meta")]
    public required AskMeta Meta { get; init; }

    [JsonPropertyName("query_id")]
    public required string QueryId { get; init; }

    [JsonPropertyName("site")]
    public required string Site { get; init; }

    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    [JsonPropertyName("query")]
    public required string Query { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<AskResult> Results { get; init; }

    /// <summary>
    /// Present when mode is 'summarize'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
