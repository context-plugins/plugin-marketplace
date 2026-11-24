using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ReportFilter
{
    /// <summary>
    /// The status used to filter reports. You can filter using one status only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
