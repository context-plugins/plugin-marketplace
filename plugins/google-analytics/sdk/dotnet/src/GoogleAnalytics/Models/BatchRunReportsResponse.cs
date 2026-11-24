using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The batch response containing multiple reports.
/// </summary>
public record BatchRunReportsResponse
{
    /// <summary>
    /// Individual responses. Each response has a separate report request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reports")]
    public IReadOnlyList<RunReportResponse>? Reports { get; init; }

    /// <summary>
    /// Identifies what kind of resource this message is. This <c>kind</c> is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public string? Kind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
