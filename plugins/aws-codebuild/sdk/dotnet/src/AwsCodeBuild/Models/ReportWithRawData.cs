using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ReportWithRawData
{
    /// <summary>
    /// The ARN of the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportArn")]
    public string? ReportArn { get; init; }

    /// <summary>
    /// The value of the requested data field from the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public string? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
