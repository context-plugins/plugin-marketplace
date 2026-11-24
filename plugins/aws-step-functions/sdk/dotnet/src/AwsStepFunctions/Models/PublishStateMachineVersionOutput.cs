using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record PublishStateMachineVersionOutput
{
    /// <summary>
    /// The date the version was created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) (ARN) that identifies the state machine version.
    /// </summary>
    [JsonPropertyName("stateMachineVersionArn")]
    public required string StateMachineVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
