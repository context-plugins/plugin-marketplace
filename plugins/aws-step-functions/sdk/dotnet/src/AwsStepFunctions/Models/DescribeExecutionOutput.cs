using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record DescribeExecutionOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the execution.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the executed stated machine.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the execution. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The current status of the execution.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// The date the execution is started.
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// If the execution ended, the date the execution stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stopDate")]
    public DateTimeOffset? StopDate { get; init; }

    /// <summary>
    /// The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputDetails")]
    public CloudWatchEventsExecutionDataDetails? InputDetails { get; init; }

    /// <summary>
    /// The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding. This field is set only if the execution succeeds. If the execution fails, this field is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public string? Output { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputDetails")]
    public CloudWatchEventsExecutionDataDetails? OutputDetails { get; init; }

    /// <summary>
    /// The X-Ray trace header that was passed to the execution. For X-Ray traces, all Amazon Web Services services use the X-Amzn-Trace-Id header from the HTTP request. Using the header is the preferred mechanism to identify a trace. StartExecution and StartSyncExecution API operations can also use traceHeader from the body of the request payload. If both sources are provided, Step Functions will use the header value (preferred) over the value in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceHeader")]
    public string? TraceHeader { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunArn")]
    public string? MapRunArn { get; init; }

    /// <summary>
    /// The error string if the state machine execution failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// The cause string if the state machine execution failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cause")]
    public string? Cause { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1. If you start an execution from a StartExecution request without specifying a state machine version or alias ARN, Step Functions returns a null value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineVersionArn")]
    public string? StateMachineVersionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, stateMachineARN:PROD. If you start an execution from a StartExecution request with a state machine version ARN, this field will be null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineAliasArn")]
    public string? StateMachineAliasArn { get; init; }

    /// <summary>
    /// The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is 0. This count is only updated if you successfully redrive an execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveCount")]
    public int? RedriveCount { get; init; }

    /// <summary>
    /// The date the execution was last redriven. If you have not yet redriven an execution, the redriveDate is null. The redriveDate is unavailable if you redrive a Map Run that starts child workflow executions of type EXPRESS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveDate")]
    public DateTimeOffset? RedriveDate { get; init; }

    /// <summary>
    /// Indicates whether or not an execution can be redriven at a given point in time. For executions of type STANDARD, redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would return the ExecutionNotRedrivable error. For a Distributed Map that includes child workflows of type STANDARD, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. For a Distributed Map that includes child workflows of type EXPRESS, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You can redrive failed or timed out EXPRESS wo
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveStatus")]
    public RedriveStatus? RedriveStatus { get; init; }

    /// <summary>
    /// When redriveStatus is NOT_REDRIVABLE, redriveStatusReason specifies the reason why an execution cannot be redriven. For executions of type STANDARD, or for a Distributed Map that includes child workflows of type STANDARD, redriveStatusReason can include one of the following reasons: State machine is in DELETING status. Execution is RUNNING and cannot be redriven. Execution is SUCCEEDED and cannot be redriven. Execution was started before the launch of RedriveExecution. Execution history event limit exceeded. Execution has exceeded the max execution time. Execution redrivable period exceeded. F
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveStatusReason")]
    public string? RedriveStatusReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
