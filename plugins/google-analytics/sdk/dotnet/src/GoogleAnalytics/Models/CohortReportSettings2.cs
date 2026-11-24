using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Optional settings for a cohort report.
/// </summary>
public record CohortReportSettings2
{
    /// <summary>
    /// If true, accumulates the result from first touch day to the end day. Not supported in <c>RunReportRequest</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accumulate")]
    public bool? Accumulate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
