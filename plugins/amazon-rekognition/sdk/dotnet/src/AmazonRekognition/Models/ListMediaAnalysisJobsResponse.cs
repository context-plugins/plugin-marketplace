using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ListMediaAnalysisJobsResponse
{
    /// <summary>
    /// Pagination token, if the previous response was incomplete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Contains a list of all media analysis jobs.
    /// </summary>
    [JsonPropertyName("MediaAnalysisJobs")]
    public required IReadOnlyList<MediaAnalysisJobDescription> MediaAnalysisJobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
