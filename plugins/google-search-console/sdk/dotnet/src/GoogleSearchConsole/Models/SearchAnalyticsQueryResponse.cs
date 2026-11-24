using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
/// </summary>
public record SearchAnalyticsQueryResponse
{
    /// <summary>
    /// How the results were aggregated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseAggregationType")]
    public ResponseAggregationType? ResponseAggregationType { get; init; }

    /// <summary>
    /// An object that may be returned with your query results, providing context about the state of the data. See details in Metadata object documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata1? Metadata { get; init; }

    /// <summary>
    /// A list of rows grouped by the key values in the order given in the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<ApiDataRow>? Rows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
