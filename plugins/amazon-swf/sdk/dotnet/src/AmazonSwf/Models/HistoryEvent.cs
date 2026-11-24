using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record HistoryEvent
{
    /// <summary>
    /// The date and time when the event occurred.
    /// </summary>
    [JsonPropertyName("eventTimestamp")]
    public required DateTimeOffset EventTimestamp { get; init; }

    /// <summary>
    /// The type of the history event.
    /// </summary>
    [JsonPropertyName("eventType")]
    public required EventType EventType { get; init; }

    /// <summary>
    /// The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.
    /// </summary>
    [JsonPropertyName("eventId")]
    public required int EventId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionStartedEventAttributes")]
    public WorkflowExecutionStartedEventAttributes? WorkflowExecutionStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionCompletedEventAttributes")]
    public WorkflowExecutionCompletedEventAttributes? WorkflowExecutionCompletedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completeWorkflowExecutionFailedEventAttributes")]
    public CompleteWorkflowExecutionFailedEventAttributes? CompleteWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionFailedEventAttributes")]
    public WorkflowExecutionFailedEventAttributes? WorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failWorkflowExecutionFailedEventAttributes")]
    public FailWorkflowExecutionFailedEventAttributes? FailWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionTimedOutEventAttributes")]
    public WorkflowExecutionTimedOutEventAttributes? WorkflowExecutionTimedOutEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionCanceledEventAttributes")]
    public WorkflowExecutionCanceledEventAttributes? WorkflowExecutionCanceledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelWorkflowExecutionFailedEventAttributes")]
    public CancelWorkflowExecutionFailedEventAttributes? CancelWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionContinuedAsNewEventAttributes")]
    public WorkflowExecutionContinuedAsNewEventAttributes? WorkflowExecutionContinuedAsNewEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueAsNewWorkflowExecutionFailedEventAttributes")]
    public ContinueAsNewWorkflowExecutionFailedEventAttributes? ContinueAsNewWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionTerminatedEventAttributes")]
    public WorkflowExecutionTerminatedEventAttributes? WorkflowExecutionTerminatedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionCancelRequestedEventAttributes")]
    public WorkflowExecutionCancelRequestedEventAttributes? WorkflowExecutionCancelRequestedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionTaskScheduledEventAttributes")]
    public DecisionTaskScheduledEventAttributes? DecisionTaskScheduledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionTaskStartedEventAttributes")]
    public DecisionTaskStartedEventAttributes? DecisionTaskStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionTaskCompletedEventAttributes")]
    public DecisionTaskCompletedEventAttributes? DecisionTaskCompletedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionTaskTimedOutEventAttributes")]
    public DecisionTaskTimedOutEventAttributes? DecisionTaskTimedOutEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskScheduledEventAttributes")]
    public ActivityTaskScheduledEventAttributes? ActivityTaskScheduledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskStartedEventAttributes")]
    public ActivityTaskStartedEventAttributes? ActivityTaskStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskCompletedEventAttributes")]
    public ActivityTaskCompletedEventAttributes? ActivityTaskCompletedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskFailedEventAttributes")]
    public ActivityTaskFailedEventAttributes? ActivityTaskFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskTimedOutEventAttributes")]
    public ActivityTaskTimedOutEventAttributes? ActivityTaskTimedOutEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskCanceledEventAttributes")]
    public ActivityTaskCanceledEventAttributes? ActivityTaskCanceledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityTaskCancelRequestedEventAttributes")]
    public ActivityTaskCancelRequestedEventAttributes? ActivityTaskCancelRequestedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflowExecutionSignaledEventAttributes")]
    public WorkflowExecutionSignaledEventAttributes? WorkflowExecutionSignaledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markerRecordedEventAttributes")]
    public MarkerRecordedEventAttributes? MarkerRecordedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordMarkerFailedEventAttributes")]
    public RecordMarkerFailedEventAttributes? RecordMarkerFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timerStartedEventAttributes")]
    public TimerStartedEventAttributes? TimerStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timerFiredEventAttributes")]
    public TimerFiredEventAttributes? TimerFiredEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timerCanceledEventAttributes")]
    public TimerCanceledEventAttributes? TimerCanceledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startChildWorkflowExecutionInitiatedEventAttributes")]
    public StartChildWorkflowExecutionInitiatedEventAttributes? StartChildWorkflowExecutionInitiatedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionStartedEventAttributes")]
    public ChildWorkflowExecutionStartedEventAttributes? ChildWorkflowExecutionStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionCompletedEventAttributes")]
    public ChildWorkflowExecutionCompletedEventAttributes? ChildWorkflowExecutionCompletedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionFailedEventAttributes")]
    public ChildWorkflowExecutionFailedEventAttributes? ChildWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionTimedOutEventAttributes")]
    public ChildWorkflowExecutionTimedOutEventAttributes? ChildWorkflowExecutionTimedOutEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionCanceledEventAttributes")]
    public ChildWorkflowExecutionCanceledEventAttributes? ChildWorkflowExecutionCanceledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childWorkflowExecutionTerminatedEventAttributes")]
    public ChildWorkflowExecutionTerminatedEventAttributes? ChildWorkflowExecutionTerminatedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalExternalWorkflowExecutionInitiatedEventAttributes")]
    public SignalExternalWorkflowExecutionInitiatedEventAttributes? SignalExternalWorkflowExecutionInitiatedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalWorkflowExecutionSignaledEventAttributes")]
    public ExternalWorkflowExecutionSignaledEventAttributes? ExternalWorkflowExecutionSignaledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalExternalWorkflowExecutionFailedEventAttributes")]
    public SignalExternalWorkflowExecutionFailedEventAttributes? SignalExternalWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalWorkflowExecutionCancelRequestedEventAttributes")]
    public ExternalWorkflowExecutionCancelRequestedEventAttributes? ExternalWorkflowExecutionCancelRequestedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCancelExternalWorkflowExecutionInitiatedEventAttributes")]
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes? RequestCancelExternalWorkflowExecutionInitiatedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCancelExternalWorkflowExecutionFailedEventAttributes")]
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes? RequestCancelExternalWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleActivityTaskFailedEventAttributes")]
    public ScheduleActivityTaskFailedEventAttributes? ScheduleActivityTaskFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCancelActivityTaskFailedEventAttributes")]
    public RequestCancelActivityTaskFailedEventAttributes? RequestCancelActivityTaskFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimerFailedEventAttributes")]
    public StartTimerFailedEventAttributes? StartTimerFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelTimerFailedEventAttributes")]
    public CancelTimerFailedEventAttributes? CancelTimerFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startChildWorkflowExecutionFailedEventAttributes")]
    public StartChildWorkflowExecutionFailedEventAttributes? StartChildWorkflowExecutionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionScheduledEventAttributes")]
    public LambdaFunctionScheduledEventAttributes? LambdaFunctionScheduledEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionStartedEventAttributes")]
    public LambdaFunctionStartedEventAttributes? LambdaFunctionStartedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionCompletedEventAttributes")]
    public LambdaFunctionCompletedEventAttributes? LambdaFunctionCompletedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionFailedEventAttributes")]
    public LambdaFunctionFailedEventAttributes? LambdaFunctionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaFunctionTimedOutEventAttributes")]
    public LambdaFunctionTimedOutEventAttributes? LambdaFunctionTimedOutEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleLambdaFunctionFailedEventAttributes")]
    public ScheduleLambdaFunctionFailedEventAttributes? ScheduleLambdaFunctionFailedEventAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startLambdaFunctionFailedEventAttributes")]
    public StartLambdaFunctionFailedEventAttributes? StartLambdaFunctionFailedEventAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
