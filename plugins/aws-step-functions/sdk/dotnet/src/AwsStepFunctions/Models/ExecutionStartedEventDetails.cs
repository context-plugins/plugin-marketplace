using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record ExecutionStartedEventDetails
{
    /// <summary>
    /// The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputDetails")]
    public HistoryEventExecutionDataDetails? InputDetails { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineAliasArn")]
    public string? StateMachineAliasArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineVersionArn")]
    public string? StateMachineVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
