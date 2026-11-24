using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// The histogram request.
/// </summary>
public record HistogramQuery
{
    /// <summary>
    /// An expression specifies a histogram request against matching jobs for searches. See SearchJobsRequest.histogram_queries for details about syntax.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("histogramQuery")]
    public string? HistogramQueryValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
