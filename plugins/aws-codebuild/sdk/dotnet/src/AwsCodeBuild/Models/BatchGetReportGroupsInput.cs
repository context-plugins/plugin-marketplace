using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetReportGroupsInput
{
    /// <summary>
    /// An array of report group ARNs that identify the report groups to return.
    /// </summary>
    [JsonPropertyName("reportGroupArns")]
    public required IReadOnlyList<string> ReportGroupArns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
