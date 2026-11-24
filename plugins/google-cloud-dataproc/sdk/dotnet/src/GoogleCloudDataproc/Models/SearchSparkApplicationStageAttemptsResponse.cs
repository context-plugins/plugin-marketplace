using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A list of Stage Attempts for a Stage of a Spark Application.
/// </summary>
public record SearchSparkApplicationStageAttemptsResponse
{
    /// <summary>
    /// This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListSparkApplicationStageAttemptsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Output only. Data corresponding to a stage attempts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkApplicationStageAttempts")]
    public IReadOnlyList<StageData>? SparkApplicationStageAttempts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
