using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The batch response containing multiple pivot reports.
/// </summary>
public record BatchRunPivotReportsResponse
{
    /// <summary>
    /// Individual responses. Each response has a separate pivot report request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pivotReports")]
    public IReadOnlyList<RunPivotReportResponse>? PivotReports { get; init; }

    /// <summary>
    /// Identifies what kind of resource this message is. This <c>kind</c> is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public string? Kind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
