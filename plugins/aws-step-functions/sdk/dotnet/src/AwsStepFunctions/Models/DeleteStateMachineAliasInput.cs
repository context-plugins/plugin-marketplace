using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record DeleteStateMachineAliasInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine alias to delete.
    /// </summary>
    [JsonPropertyName("stateMachineAliasArn")]
    public required string StateMachineAliasArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
