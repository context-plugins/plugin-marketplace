using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The batch request containing multiple report requests.
/// </summary>
public record BatchRunReportsRequest
{
    /// <summary>
    /// Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public IReadOnlyList<RunReportRequest>? Requests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
