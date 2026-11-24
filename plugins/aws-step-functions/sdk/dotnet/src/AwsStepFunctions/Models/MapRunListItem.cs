using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record MapRunListItem
{
    /// <summary>
    /// The executionArn of the execution from which the Map Run was started.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Map Run.
    /// </summary>
    [JsonPropertyName("mapRunArn")]
    public required string MapRunArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the executed state machine.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The date on which the Map Run started.
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The date on which the Map Run stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stopDate")]
    public DateTimeOffset? StopDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
