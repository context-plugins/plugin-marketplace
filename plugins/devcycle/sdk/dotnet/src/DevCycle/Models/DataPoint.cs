using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record DataPoint
{
    /// <summary>
    /// Date of this data point
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    /// <summary>
    /// Mapping of variation (variation1, variation2 etc.) to result value in that variation
    /// </summary>
    [JsonPropertyName("values")]
    public required object Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
