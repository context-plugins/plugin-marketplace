using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DeleteStateMachineVersionInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine version to delete.
    /// </summary>
    [JsonPropertyName("stateMachineVersionArn")]
    public required string StateMachineVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
