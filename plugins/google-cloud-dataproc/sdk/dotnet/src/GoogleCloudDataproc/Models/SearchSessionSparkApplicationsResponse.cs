using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A list of summary of Spark Applications
/// </summary>
public record SearchSessionSparkApplicationsResponse
{
    /// <summary>
    /// This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Output only. High level information corresponding to an application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkApplications")]
    public IReadOnlyList<SparkApplication>? SparkApplications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
