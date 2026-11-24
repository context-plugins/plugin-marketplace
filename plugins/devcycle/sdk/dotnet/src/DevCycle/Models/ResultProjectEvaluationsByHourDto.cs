using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ResultProjectEvaluationsByHourDto
{
    [JsonPropertyName("result")]
    public required ResultsWithProjectData Result { get; init; }

    /// <summary>
    /// Whether this result came from a cache or a live result
    /// </summary>
    [JsonPropertyName("cached")]
    public required bool Cached { get; init; }

    /// <summary>
    /// Date which these results are up-to-date with
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
