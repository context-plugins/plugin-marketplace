using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A list of Jobs associated with a Spark Application.
/// </summary>
public record SearchSparkApplicationJobsResponse
{
    /// <summary>
    /// Output only. Data corresponding to a spark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkApplicationJobs")]
    public IReadOnlyList<JobData>? SparkApplicationJobs { get; init; }

    /// <summary>
    /// This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationJobsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
