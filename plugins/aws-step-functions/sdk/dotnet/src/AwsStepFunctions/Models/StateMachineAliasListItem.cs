using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record StateMachineAliasListItem
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, stateMachineARN:PROD.
    /// </summary>
    [JsonPropertyName("stateMachineAliasArn")]
    public required string StateMachineAliasArn { get; init; }

    /// <summary>
    /// The creation date of a state machine alias.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
