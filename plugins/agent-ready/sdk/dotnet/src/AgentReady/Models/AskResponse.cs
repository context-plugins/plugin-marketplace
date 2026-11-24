using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Either an answer or a failure.
/// </summary>
public record AskResponse
{
    /// <summary>
    /// NLWeb response envelope metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_meta")]
    public AskMeta? Meta { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query_id")]
    public string? QueryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site")]
    public string? Site { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<AskResult>? Results { get; init; }

    /// <summary>
    /// Present when mode is 'summarize'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error2? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
