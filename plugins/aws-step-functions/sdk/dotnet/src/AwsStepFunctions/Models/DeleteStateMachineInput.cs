using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DeleteStateMachineInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine to delete.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
