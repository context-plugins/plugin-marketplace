using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record StartSyncExecutionOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the execution.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the state machine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineArn")]
    public string? StateMachineArn { get; init; }

    /// <summary>
    /// The name of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The date the execution is started.
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// If the execution has already ended, the date the execution stopped.
    /// </summary>
    [JsonPropertyName("stopDate")]
    public required DateTimeOffset StopDate { get; init; }

    /// <summary>
    /// The current status of the execution.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status4 Status { get; init; }

    /// <summary>
    /// The error code of the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// A more detailed explanation of the cause of the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cause")]
    public string? Cause { get; init; }

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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingDetails")]
    public BillingDetails? BillingDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
