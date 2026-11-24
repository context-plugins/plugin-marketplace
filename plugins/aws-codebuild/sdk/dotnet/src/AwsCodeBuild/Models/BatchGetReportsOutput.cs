using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetReportsOutput
{
    /// <summary>
    /// The array of Report objects returned by BatchGetReports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reports")]
    public IReadOnlyList<Report>? Reports { get; init; }

    /// <summary>
    /// An array of ARNs passed to BatchGetReportGroups that are not associated with a Report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportsNotFound")]
    public IReadOnlyList<string>? ReportsNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
