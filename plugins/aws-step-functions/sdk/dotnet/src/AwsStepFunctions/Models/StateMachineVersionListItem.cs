using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record StateMachineVersionListItem
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1.
    /// </summary>
    [JsonPropertyName("stateMachineVersionArn")]
    public required string StateMachineVersionArn { get; init; }

    /// <summary>
    /// The creation date of a state machine version.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
