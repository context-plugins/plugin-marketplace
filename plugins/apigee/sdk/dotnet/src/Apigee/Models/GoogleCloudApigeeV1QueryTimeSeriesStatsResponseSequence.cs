using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A sequence of time series.
/// </summary>
public record GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence
{
    /// <summary>
    /// Map of dimensions and their values that uniquely identifies a time series sequence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyDictionary<string, string>? Dimensions { get; init; }

    /// <summary>
    /// List of points. First value of each inner list is a timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("points")]
    public IReadOnlyList<IReadOnlyList<object>>? Points { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
