using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ExecutionListItem
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the execution.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine that ran the execution.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the execution. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The current status of the execution.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// The date the execution started.
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// If the execution already ended, the date the execution stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stopDate")]
    public DateTimeOffset? StopDate { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of a Map Run. This field is returned only if mapRunArn was specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions, the mapRunArn isn't returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunArn")]
    public string? MapRunArn { get; init; }

    /// <summary>
    /// The total number of items processed in a child workflow execution. This field is returned only if mapRunArn was specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions, the itemCount field isn't returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemCount")]
    public int? ItemCount { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine version associated with the execution. If the state machine execution was started with an unqualified ARN, it returns null. If the execution was started using a stateMachineAliasArn, both the stateMachineAliasArn and stateMachineVersionArn parameters contain the respective values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineVersionArn")]
    public string? StateMachineVersionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine alias used to start an execution. If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineAliasArn")]
    public string? StateMachineAliasArn { get; init; }

    /// <summary>
    /// The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is 0. This count is only updated when you successfully redrive an execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveCount")]
    public int? RedriveCount { get; init; }

    /// <summary>
    /// The date the execution was last redriven.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveDate")]
    public DateTimeOffset? RedriveDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
