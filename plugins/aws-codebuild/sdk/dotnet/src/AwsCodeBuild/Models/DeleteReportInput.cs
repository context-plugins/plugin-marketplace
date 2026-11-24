using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteReportInput
{
    /// <summary>
    /// The ARN of the report to delete.
    /// </summary>
    [JsonPropertyName("arn")]
    public required string Arn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
