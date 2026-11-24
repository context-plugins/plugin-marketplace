using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureDataPoint
{
    /// <summary>
    /// Mapping of evaluation variation (variation1, variation2 etc.) to number of evaluations in that variation
    /// </summary>
    [JsonPropertyName("values")]
    public required object Values { get; init; }

    /// <summary>
    /// Date of this data point
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
