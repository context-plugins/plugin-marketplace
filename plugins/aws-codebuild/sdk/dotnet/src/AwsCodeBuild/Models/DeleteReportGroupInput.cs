using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteReportGroupInput
{
    /// <summary>
    /// The ARN of the report group to delete.
    /// </summary>
    [JsonPropertyName("arn")]
    public required string Arn { get; init; }

    /// <summary>
    /// If true, deletes any reports that belong to a report group before deleting the report group. If false, you must delete any reports in the report group. Use ListReportsForReportGroup to get the reports in a report group. Use DeleteReport to delete the reports. If you call DeleteReportGroup for a report group that contains one or more reports, an exception is thrown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteReports")]
    public bool? DeleteReports { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
