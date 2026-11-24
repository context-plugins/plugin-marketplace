using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.
/// </summary>
public record GoogleCloudApigeeV1QueryTabularStatsResponse
{
    /// <summary>
    /// Next page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Resultant rows from the executed query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<IReadOnlyList<object>>? Values { get; init; }

    /// <summary>
    /// Column names corresponding to the same order as the inner values in the stats field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
