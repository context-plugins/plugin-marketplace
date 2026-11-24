using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetReportsInput
{
    /// <summary>
    /// An array of ARNs that identify the Report objects to return.
    /// </summary>
    [JsonPropertyName("reportArns")]
    public required IReadOnlyList<string> ReportArns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
