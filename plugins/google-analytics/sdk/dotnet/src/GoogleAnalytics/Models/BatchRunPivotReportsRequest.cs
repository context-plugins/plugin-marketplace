using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The batch request containing multiple pivot report requests.
/// </summary>
public record BatchRunPivotReportsRequest
{
    /// <summary>
    /// Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public IReadOnlyList<RunPivotReportRequest>? Requests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
