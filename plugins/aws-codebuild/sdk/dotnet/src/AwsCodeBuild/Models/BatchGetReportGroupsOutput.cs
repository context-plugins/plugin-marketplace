using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetReportGroupsOutput
{
    /// <summary>
    /// The array of report groups returned by BatchGetReportGroups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportGroups")]
    public IReadOnlyList<ReportGroup>? ReportGroups { get; init; }

    /// <summary>
    /// An array of ARNs passed to BatchGetReportGroups that are not associated with a ReportGroup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportGroupsNotFound")]
    public IReadOnlyList<string>? ReportGroupsNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
