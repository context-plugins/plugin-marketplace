using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record CreateReportGroupInput
{
    /// <summary>
    /// The name of the report group.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of report group.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type11 Type { get; init; }

    [JsonPropertyName("exportConfig")]
    public required ReportExportConfig ExportConfig { get; init; }

    /// <summary>
    /// A list of tag key and value pairs associated with this report group. These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
