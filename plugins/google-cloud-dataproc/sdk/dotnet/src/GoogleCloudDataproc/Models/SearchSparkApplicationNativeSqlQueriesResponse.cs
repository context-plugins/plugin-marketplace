using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// List of all Native SQL queries details for a Spark Application.
/// </summary>
public record SearchSparkApplicationNativeSqlQueriesResponse
{
    /// <summary>
    /// Output only. Native SQL Execution Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkApplicationNativeSqlQueries")]
    public IReadOnlyList<NativeSqlExecutionUiData>? SparkApplicationNativeSqlQueries { get; init; }

    /// <summary>
    /// This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationNativeSqlQueriesRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
