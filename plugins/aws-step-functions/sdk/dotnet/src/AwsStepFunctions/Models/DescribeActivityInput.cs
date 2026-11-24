using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DescribeActivityInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the activity to describe.
    /// </summary>
    [JsonPropertyName("activityArn")]
    public required string ActivityArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
