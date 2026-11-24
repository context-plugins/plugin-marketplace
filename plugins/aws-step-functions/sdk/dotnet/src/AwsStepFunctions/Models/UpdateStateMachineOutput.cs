using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record UpdateStateMachineOutput
{
    /// <summary>
    /// The date and time the state machine was updated.
    /// </summary>
    [JsonPropertyName("updateDate")]
    public required DateTimeOffset UpdateDate { get; init; }

    /// <summary>
    /// The revision identifier for the updated state machine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the published state machine version. If the publish parameter isn't set to true, this field returns null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineVersionArn")]
    public string? StateMachineVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
