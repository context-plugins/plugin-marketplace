using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ReportExportConfig
{
    /// <summary>
    /// The export configuration type. Valid values are: S3: The report results are exported to an S3 bucket. NO_EXPORT: The report results are not exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportConfigType")]
    public ExportConfigType? ExportConfigType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Destination")]
    public S3ReportExportConfig? S3Destination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
