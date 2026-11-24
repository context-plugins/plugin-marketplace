using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record CreateStateMachineOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the created state machine.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The date the state machine is created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not set the publish parameter to true, this field returns null value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineVersionArn")]
    public string? StateMachineVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
