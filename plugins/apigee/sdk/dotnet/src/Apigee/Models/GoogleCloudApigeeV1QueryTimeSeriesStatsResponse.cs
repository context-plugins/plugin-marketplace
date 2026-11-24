using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents security stats result as a collection of time series sequences.
/// </summary>
public record GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
{
    /// <summary>
    /// Column names corresponding to the same order as the inner values in the stats field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    /// <summary>
    /// Results of the query returned as a JSON array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence>? Values { get; init; }

    /// <summary>
    /// Next page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
