using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record UpdateReportGroupInput
{
    /// <summary>
    /// The ARN of the report group to update.
    /// </summary>
    [JsonPropertyName("arn")]
    public required string Arn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportConfig")]
    public ReportExportConfig? ExportConfig { get; init; }

    /// <summary>
    /// An updated list of tag key and value pairs associated with this report group. These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
