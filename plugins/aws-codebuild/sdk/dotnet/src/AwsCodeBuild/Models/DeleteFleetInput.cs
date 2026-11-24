using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteFleetInput
{
    /// <summary>
    /// The ARN of the compute fleet.
    /// </summary>
    [JsonPropertyName("arn")]
    public required string Arn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
