using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DescribeMapRunInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a Map Run.
    /// </summary>
    [JsonPropertyName("mapRunArn")]
    public required string MapRunArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
