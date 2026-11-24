using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record ListTagsForResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Step Functions state machine or activity.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
