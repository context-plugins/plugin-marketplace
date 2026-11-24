using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record HistoryEvent
{
    /// <summary>
    /// The date and time the event occurred, expressed in seconds and fractional milliseconds since the Unix epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC).
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// The type of the event.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type3 Type { get; init; }

    /// <summary>
    /// The id of the event. Events are numbered sequentially, starting at one.
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// The id of the previous event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousEventId")]
    public int? PreviousEventId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityFailedEventDetails")]
    public ActivityFailedEventDetails? ActivityFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityScheduleFailedEventDetails")]
    public ActivityScheduleFailedEventDetails? ActivityScheduleFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityScheduledEventDetails")]
    public ActivityScheduledEventDetails? ActivityScheduledEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityStartedEventDetails")]
    public ActivityStartedEventDetails? ActivityStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activitySucceededEventDetails")]
    public ActivitySucceededEventDetails? ActivitySucceededEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTimedOutEventDetails")]
    public ActivityTimedOutEventDetails? ActivityTimedOutEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskFailedEventDetails")]
    public TaskFailedEventDetails? TaskFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskScheduledEventDetails")]
    public TaskScheduledEventDetails? TaskScheduledEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskStartFailedEventDetails")]
    public TaskStartFailedEventDetails? TaskStartFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskStartedEventDetails")]
    public TaskStartedEventDetails? TaskStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskSubmitFailedEventDetails")]
    public TaskSubmitFailedEventDetails? TaskSubmitFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskSubmittedEventDetails")]
    public TaskSubmittedEventDetails? TaskSubmittedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskSucceededEventDetails")]
    public TaskSucceededEventDetails? TaskSucceededEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskTimedOutEventDetails")]
    public TaskTimedOutEventDetails? TaskTimedOutEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionFailedEventDetails")]
    public ExecutionFailedEventDetails? ExecutionFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionStartedEventDetails")]
    public ExecutionStartedEventDetails? ExecutionStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionSucceededEventDetails")]
    public ExecutionSucceededEventDetails? ExecutionSucceededEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionAbortedEventDetails")]
    public ExecutionAbortedEventDetails? ExecutionAbortedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionTimedOutEventDetails")]
    public ExecutionTimedOutEventDetails? ExecutionTimedOutEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionRedrivenEventDetails")]
    public ExecutionRedrivenEventDetails? ExecutionRedrivenEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapStateStartedEventDetails")]
    public MapStateStartedEventDetails? MapStateStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapIterationStartedEventDetails")]
    public MapIterationEventDetails? MapIterationStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapIterationSucceededEventDetails")]
    public MapIterationEventDetails? MapIterationSucceededEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapIterationFailedEventDetails")]
    public MapIterationEventDetails? MapIterationFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapIterationAbortedEventDetails")]
    public MapIterationEventDetails? MapIterationAbortedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionFailedEventDetails")]
    public LambdaFunctionFailedEventDetails? LambdaFunctionFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionScheduleFailedEventDetails")]
    public LambdaFunctionScheduleFailedEventDetails? LambdaFunctionScheduleFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionScheduledEventDetails")]
    public LambdaFunctionScheduledEventDetails? LambdaFunctionScheduledEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionStartFailedEventDetails")]
    public LambdaFunctionStartFailedEventDetails? LambdaFunctionStartFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionSucceededEventDetails")]
    public LambdaFunctionSucceededEventDetails? LambdaFunctionSucceededEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionTimedOutEventDetails")]
    public LambdaFunctionTimedOutEventDetails? LambdaFunctionTimedOutEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateEnteredEventDetails")]
    public StateEnteredEventDetails? StateEnteredEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateExitedEventDetails")]
    public StateExitedEventDetails? StateExitedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunStartedEventDetails")]
    public MapRunStartedEventDetails? MapRunStartedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunFailedEventDetails")]
    public MapRunFailedEventDetails? MapRunFailedEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunRedrivenEventDetails")]
    public MapRunRedrivenEventDetails? MapRunRedrivenEventDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evaluationFailedEventDetails")]
    public EvaluationFailedEventDetails? EvaluationFailedEventDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
