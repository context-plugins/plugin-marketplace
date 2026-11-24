using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record CreateStateMachineAliasOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the created state machine alias.
    /// </summary>
    [JsonPropertyName("stateMachineAliasArn")]
    public required string StateMachineAliasArn { get; init; }

    /// <summary>
    /// The date the state machine alias was created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
