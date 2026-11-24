using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The type of the history event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType WorkflowExecutionStarted = new("WorkflowExecutionStarted");

    public static readonly EventType WorkflowExecutionCancelRequested = new("WorkflowExecutionCancelRequested");

    public static readonly EventType WorkflowExecutionCompleted = new("WorkflowExecutionCompleted");

    public static readonly EventType CompleteWorkflowExecutionFailed = new("CompleteWorkflowExecutionFailed");

    public static readonly EventType WorkflowExecutionFailed = new("WorkflowExecutionFailed");

    public static readonly EventType FailWorkflowExecutionFailed = new("FailWorkflowExecutionFailed");

    public static readonly EventType WorkflowExecutionTimedOut = new("WorkflowExecutionTimedOut");

    public static readonly EventType WorkflowExecutionCanceled = new("WorkflowExecutionCanceled");

    public static readonly EventType CancelWorkflowExecutionFailed = new("CancelWorkflowExecutionFailed");

    public static readonly EventType WorkflowExecutionContinuedAsNew = new("WorkflowExecutionContinuedAsNew");

    public static readonly EventType ContinueAsNewWorkflowExecutionFailed = new("ContinueAsNewWorkflowExecutionFailed");

    public static readonly EventType WorkflowExecutionTerminated = new("WorkflowExecutionTerminated");

    public static readonly EventType DecisionTaskScheduled = new("DecisionTaskScheduled");

    public static readonly EventType DecisionTaskStarted = new("DecisionTaskStarted");

    public static readonly EventType DecisionTaskCompleted = new("DecisionTaskCompleted");

    public static readonly EventType DecisionTaskTimedOut = new("DecisionTaskTimedOut");

    public static readonly EventType ActivityTaskScheduled = new("ActivityTaskScheduled");

    public static readonly EventType ScheduleActivityTaskFailed = new("ScheduleActivityTaskFailed");

    public static readonly EventType ActivityTaskStarted = new("ActivityTaskStarted");

    public static readonly EventType ActivityTaskCompleted = new("ActivityTaskCompleted");

    public static readonly EventType ActivityTaskFailed = new("ActivityTaskFailed");

    public static readonly EventType ActivityTaskTimedOut = new("ActivityTaskTimedOut");

    public static readonly EventType ActivityTaskCanceled = new("ActivityTaskCanceled");

    public static readonly EventType ActivityTaskCancelRequested = new("ActivityTaskCancelRequested");

    public static readonly EventType RequestCancelActivityTaskFailed = new("RequestCancelActivityTaskFailed");

    public static readonly EventType WorkflowExecutionSignaled = new("WorkflowExecutionSignaled");

    public static readonly EventType MarkerRecorded = new("MarkerRecorded");

    public static readonly EventType RecordMarkerFailed = new("RecordMarkerFailed");

    public static readonly EventType TimerStarted = new("TimerStarted");

    public static readonly EventType StartTimerFailed = new("StartTimerFailed");

    public static readonly EventType TimerFired = new("TimerFired");

    public static readonly EventType TimerCanceled = new("TimerCanceled");

    public static readonly EventType CancelTimerFailed = new("CancelTimerFailed");

    public static readonly EventType StartChildWorkflowExecutionInitiated = new("StartChildWorkflowExecutionInitiated");

    public static readonly EventType StartChildWorkflowExecutionFailed = new("StartChildWorkflowExecutionFailed");

    public static readonly EventType ChildWorkflowExecutionStarted = new("ChildWorkflowExecutionStarted");

    public static readonly EventType ChildWorkflowExecutionCompleted = new("ChildWorkflowExecutionCompleted");

    public static readonly EventType ChildWorkflowExecutionFailed = new("ChildWorkflowExecutionFailed");

    public static readonly EventType ChildWorkflowExecutionTimedOut = new("ChildWorkflowExecutionTimedOut");

    public static readonly EventType ChildWorkflowExecutionCanceled = new("ChildWorkflowExecutionCanceled");

    public static readonly EventType ChildWorkflowExecutionTerminated = new("ChildWorkflowExecutionTerminated");

    public static readonly EventType SignalExternalWorkflowExecutionInitiated = new(
        "SignalExternalWorkflowExecutionInitiated");

    public static readonly EventType SignalExternalWorkflowExecutionFailed = new(
        "SignalExternalWorkflowExecutionFailed");

    public static readonly EventType ExternalWorkflowExecutionSignaled = new("ExternalWorkflowExecutionSignaled");

    public static readonly EventType RequestCancelExternalWorkflowExecutionInitiated = new(
        "RequestCancelExternalWorkflowExecutionInitiated");

    public static readonly EventType RequestCancelExternalWorkflowExecutionFailed = new(
        "RequestCancelExternalWorkflowExecutionFailed");

    public static readonly EventType ExternalWorkflowExecutionCancelRequested = new(
        "ExternalWorkflowExecutionCancelRequested");

    public static readonly EventType LambdaFunctionScheduled = new("LambdaFunctionScheduled");

    public static readonly EventType LambdaFunctionStarted = new("LambdaFunctionStarted");

    public static readonly EventType LambdaFunctionCompleted = new("LambdaFunctionCompleted");

    public static readonly EventType LambdaFunctionFailed = new("LambdaFunctionFailed");

    public static readonly EventType LambdaFunctionTimedOut = new("LambdaFunctionTimedOut");

    public static readonly EventType ScheduleLambdaFunctionFailed = new("ScheduleLambdaFunctionFailed");

    public static readonly EventType StartLambdaFunctionFailed = new("StartLambdaFunctionFailed");

    public TResult Match<TResult>(Func<TResult> onWorkflowExecutionStarted,
        Func<TResult> onWorkflowExecutionCancelRequested,
        Func<TResult> onWorkflowExecutionCompleted,
        Func<TResult> onCompleteWorkflowExecutionFailed,
        Func<TResult> onWorkflowExecutionFailed,
        Func<TResult> onFailWorkflowExecutionFailed,
        Func<TResult> onWorkflowExecutionTimedOut,
        Func<TResult> onWorkflowExecutionCanceled,
        Func<TResult> onCancelWorkflowExecutionFailed,
        Func<TResult> onWorkflowExecutionContinuedAsNew,
        Func<TResult> onContinueAsNewWorkflowExecutionFailed,
        Func<TResult> onWorkflowExecutionTerminated,
        Func<TResult> onDecisionTaskScheduled,
        Func<TResult> onDecisionTaskStarted,
        Func<TResult> onDecisionTaskCompleted,
        Func<TResult> onDecisionTaskTimedOut,
        Func<TResult> onActivityTaskScheduled,
        Func<TResult> onScheduleActivityTaskFailed,
        Func<TResult> onActivityTaskStarted,
        Func<TResult> onActivityTaskCompleted,
        Func<TResult> onActivityTaskFailed,
        Func<TResult> onActivityTaskTimedOut,
        Func<TResult> onActivityTaskCanceled,
        Func<TResult> onActivityTaskCancelRequested,
        Func<TResult> onRequestCancelActivityTaskFailed,
        Func<TResult> onWorkflowExecutionSignaled,
        Func<TResult> onMarkerRecorded,
        Func<TResult> onRecordMarkerFailed,
        Func<TResult> onTimerStarted,
        Func<TResult> onStartTimerFailed,
        Func<TResult> onTimerFired,
        Func<TResult> onTimerCanceled,
        Func<TResult> onCancelTimerFailed,
        Func<TResult> onStartChildWorkflowExecutionInitiated,
        Func<TResult> onStartChildWorkflowExecutionFailed,
        Func<TResult> onChildWorkflowExecutionStarted,
        Func<TResult> onChildWorkflowExecutionCompleted,
        Func<TResult> onChildWorkflowExecutionFailed,
        Func<TResult> onChildWorkflowExecutionTimedOut,
        Func<TResult> onChildWorkflowExecutionCanceled,
        Func<TResult> onChildWorkflowExecutionTerminated,
        Func<TResult> onSignalExternalWorkflowExecutionInitiated,
        Func<TResult> onSignalExternalWorkflowExecutionFailed,
        Func<TResult> onExternalWorkflowExecutionSignaled,
        Func<TResult> onRequestCancelExternalWorkflowExecutionInitiated,
        Func<TResult> onRequestCancelExternalWorkflowExecutionFailed,
        Func<TResult> onExternalWorkflowExecutionCancelRequested,
        Func<TResult> onLambdaFunctionScheduled,
        Func<TResult> onLambdaFunctionStarted,
        Func<TResult> onLambdaFunctionCompleted,
        Func<TResult> onLambdaFunctionFailed,
        Func<TResult> onLambdaFunctionTimedOut,
        Func<TResult> onScheduleLambdaFunctionFailed,
        Func<TResult> onStartLambdaFunctionFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WorkflowExecutionStarted => onWorkflowExecutionStarted(),
            _ when this == WorkflowExecutionCancelRequested => onWorkflowExecutionCancelRequested(),
            _ when this == WorkflowExecutionCompleted => onWorkflowExecutionCompleted(),
            _ when this == CompleteWorkflowExecutionFailed => onCompleteWorkflowExecutionFailed(),
            _ when this == WorkflowExecutionFailed => onWorkflowExecutionFailed(),
            _ when this == FailWorkflowExecutionFailed => onFailWorkflowExecutionFailed(),
            _ when this == WorkflowExecutionTimedOut => onWorkflowExecutionTimedOut(),
            _ when this == WorkflowExecutionCanceled => onWorkflowExecutionCanceled(),
            _ when this == CancelWorkflowExecutionFailed => onCancelWorkflowExecutionFailed(),
            _ when this == WorkflowExecutionContinuedAsNew => onWorkflowExecutionContinuedAsNew(),
            _ when this == ContinueAsNewWorkflowExecutionFailed => onContinueAsNewWorkflowExecutionFailed(),
            _ when this == WorkflowExecutionTerminated => onWorkflowExecutionTerminated(),
            _ when this == DecisionTaskScheduled => onDecisionTaskScheduled(),
            _ when this == DecisionTaskStarted => onDecisionTaskStarted(),
            _ when this == DecisionTaskCompleted => onDecisionTaskCompleted(),
            _ when this == DecisionTaskTimedOut => onDecisionTaskTimedOut(),
            _ when this == ActivityTaskScheduled => onActivityTaskScheduled(),
            _ when this == ScheduleActivityTaskFailed => onScheduleActivityTaskFailed(),
            _ when this == ActivityTaskStarted => onActivityTaskStarted(),
            _ when this == ActivityTaskCompleted => onActivityTaskCompleted(),
            _ when this == ActivityTaskFailed => onActivityTaskFailed(),
            _ when this == ActivityTaskTimedOut => onActivityTaskTimedOut(),
            _ when this == ActivityTaskCanceled => onActivityTaskCanceled(),
            _ when this == ActivityTaskCancelRequested => onActivityTaskCancelRequested(),
            _ when this == RequestCancelActivityTaskFailed => onRequestCancelActivityTaskFailed(),
            _ when this == WorkflowExecutionSignaled => onWorkflowExecutionSignaled(),
            _ when this == MarkerRecorded => onMarkerRecorded(),
            _ when this == RecordMarkerFailed => onRecordMarkerFailed(),
            _ when this == TimerStarted => onTimerStarted(),
            _ when this == StartTimerFailed => onStartTimerFailed(),
            _ when this == TimerFired => onTimerFired(),
            _ when this == TimerCanceled => onTimerCanceled(),
            _ when this == CancelTimerFailed => onCancelTimerFailed(),
            _ when this == StartChildWorkflowExecutionInitiated => onStartChildWorkflowExecutionInitiated(),
            _ when this == StartChildWorkflowExecutionFailed => onStartChildWorkflowExecutionFailed(),
            _ when this == ChildWorkflowExecutionStarted => onChildWorkflowExecutionStarted(),
            _ when this == ChildWorkflowExecutionCompleted => onChildWorkflowExecutionCompleted(),
            _ when this == ChildWorkflowExecutionFailed => onChildWorkflowExecutionFailed(),
            _ when this == ChildWorkflowExecutionTimedOut => onChildWorkflowExecutionTimedOut(),
            _ when this == ChildWorkflowExecutionCanceled => onChildWorkflowExecutionCanceled(),
            _ when this == ChildWorkflowExecutionTerminated => onChildWorkflowExecutionTerminated(),
            _ when this == SignalExternalWorkflowExecutionInitiated => onSignalExternalWorkflowExecutionInitiated(),
            _ when this == SignalExternalWorkflowExecutionFailed => onSignalExternalWorkflowExecutionFailed(),
            _ when this == ExternalWorkflowExecutionSignaled => onExternalWorkflowExecutionSignaled(),
            _ when this ==
                RequestCancelExternalWorkflowExecutionInitiated => onRequestCancelExternalWorkflowExecutionInitiated(),
            _ when this ==
                RequestCancelExternalWorkflowExecutionFailed => onRequestCancelExternalWorkflowExecutionFailed(),
            _ when this == ExternalWorkflowExecutionCancelRequested => onExternalWorkflowExecutionCancelRequested(),
            _ when this == LambdaFunctionScheduled => onLambdaFunctionScheduled(),
            _ when this == LambdaFunctionStarted => onLambdaFunctionStarted(),
            _ when this == LambdaFunctionCompleted => onLambdaFunctionCompleted(),
            _ when this == LambdaFunctionFailed => onLambdaFunctionFailed(),
            _ when this == LambdaFunctionTimedOut => onLambdaFunctionTimedOut(),
            _ when this == ScheduleLambdaFunctionFailed => onScheduleLambdaFunctionFailed(),
            _ when this == StartLambdaFunctionFailed => onStartLambdaFunctionFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onWorkflowExecutionStarted,
        Action onWorkflowExecutionCancelRequested,
        Action onWorkflowExecutionCompleted,
        Action onCompleteWorkflowExecutionFailed,
        Action onWorkflowExecutionFailed,
        Action onFailWorkflowExecutionFailed,
        Action onWorkflowExecutionTimedOut,
        Action onWorkflowExecutionCanceled,
        Action onCancelWorkflowExecutionFailed,
        Action onWorkflowExecutionContinuedAsNew,
        Action onContinueAsNewWorkflowExecutionFailed,
        Action onWorkflowExecutionTerminated,
        Action onDecisionTaskScheduled,
        Action onDecisionTaskStarted,
        Action onDecisionTaskCompleted,
        Action onDecisionTaskTimedOut,
        Action onActivityTaskScheduled,
        Action onScheduleActivityTaskFailed,
        Action onActivityTaskStarted,
        Action onActivityTaskCompleted,
        Action onActivityTaskFailed,
        Action onActivityTaskTimedOut,
        Action onActivityTaskCanceled,
        Action onActivityTaskCancelRequested,
        Action onRequestCancelActivityTaskFailed,
        Action onWorkflowExecutionSignaled,
        Action onMarkerRecorded,
        Action onRecordMarkerFailed,
        Action onTimerStarted,
        Action onStartTimerFailed,
        Action onTimerFired,
        Action onTimerCanceled,
        Action onCancelTimerFailed,
        Action onStartChildWorkflowExecutionInitiated,
        Action onStartChildWorkflowExecutionFailed,
        Action onChildWorkflowExecutionStarted,
        Action onChildWorkflowExecutionCompleted,
        Action onChildWorkflowExecutionFailed,
        Action onChildWorkflowExecutionTimedOut,
        Action onChildWorkflowExecutionCanceled,
        Action onChildWorkflowExecutionTerminated,
        Action onSignalExternalWorkflowExecutionInitiated,
        Action onSignalExternalWorkflowExecutionFailed,
        Action onExternalWorkflowExecutionSignaled,
        Action onRequestCancelExternalWorkflowExecutionInitiated,
        Action onRequestCancelExternalWorkflowExecutionFailed,
        Action onExternalWorkflowExecutionCancelRequested,
        Action onLambdaFunctionScheduled,
        Action onLambdaFunctionStarted,
        Action onLambdaFunctionCompleted,
        Action onLambdaFunctionFailed,
        Action onLambdaFunctionTimedOut,
        Action onScheduleLambdaFunctionFailed,
        Action onStartLambdaFunctionFailed,
        Action<string> otherwise)
    {
        if (this == WorkflowExecutionStarted) onWorkflowExecutionStarted();
        else if (this == WorkflowExecutionCancelRequested) onWorkflowExecutionCancelRequested();
        else if (this == WorkflowExecutionCompleted) onWorkflowExecutionCompleted();
        else if (this == CompleteWorkflowExecutionFailed) onCompleteWorkflowExecutionFailed();
        else if (this == WorkflowExecutionFailed) onWorkflowExecutionFailed();
        else if (this == FailWorkflowExecutionFailed) onFailWorkflowExecutionFailed();
        else if (this == WorkflowExecutionTimedOut) onWorkflowExecutionTimedOut();
        else if (this == WorkflowExecutionCanceled) onWorkflowExecutionCanceled();
        else if (this == CancelWorkflowExecutionFailed) onCancelWorkflowExecutionFailed();
        else if (this == WorkflowExecutionContinuedAsNew) onWorkflowExecutionContinuedAsNew();
        else if (this == ContinueAsNewWorkflowExecutionFailed) onContinueAsNewWorkflowExecutionFailed();
        else if (this == WorkflowExecutionTerminated) onWorkflowExecutionTerminated();
        else if (this == DecisionTaskScheduled) onDecisionTaskScheduled();
        else if (this == DecisionTaskStarted) onDecisionTaskStarted();
        else if (this == DecisionTaskCompleted) onDecisionTaskCompleted();
        else if (this == DecisionTaskTimedOut) onDecisionTaskTimedOut();
        else if (this == ActivityTaskScheduled) onActivityTaskScheduled();
        else if (this == ScheduleActivityTaskFailed) onScheduleActivityTaskFailed();
        else if (this == ActivityTaskStarted) onActivityTaskStarted();
        else if (this == ActivityTaskCompleted) onActivityTaskCompleted();
        else if (this == ActivityTaskFailed) onActivityTaskFailed();
        else if (this == ActivityTaskTimedOut) onActivityTaskTimedOut();
        else if (this == ActivityTaskCanceled) onActivityTaskCanceled();
        else if (this == ActivityTaskCancelRequested) onActivityTaskCancelRequested();
        else if (this == RequestCancelActivityTaskFailed) onRequestCancelActivityTaskFailed();
        else if (this == WorkflowExecutionSignaled) onWorkflowExecutionSignaled();
        else if (this == MarkerRecorded) onMarkerRecorded();
        else if (this == RecordMarkerFailed) onRecordMarkerFailed();
        else if (this == TimerStarted) onTimerStarted();
        else if (this == StartTimerFailed) onStartTimerFailed();
        else if (this == TimerFired) onTimerFired();
        else if (this == TimerCanceled) onTimerCanceled();
        else if (this == CancelTimerFailed) onCancelTimerFailed();
        else if (this == StartChildWorkflowExecutionInitiated) onStartChildWorkflowExecutionInitiated();
        else if (this == StartChildWorkflowExecutionFailed) onStartChildWorkflowExecutionFailed();
        else if (this == ChildWorkflowExecutionStarted) onChildWorkflowExecutionStarted();
        else if (this == ChildWorkflowExecutionCompleted) onChildWorkflowExecutionCompleted();
        else if (this == ChildWorkflowExecutionFailed) onChildWorkflowExecutionFailed();
        else if (this == ChildWorkflowExecutionTimedOut) onChildWorkflowExecutionTimedOut();
        else if (this == ChildWorkflowExecutionCanceled) onChildWorkflowExecutionCanceled();
        else if (this == ChildWorkflowExecutionTerminated) onChildWorkflowExecutionTerminated();
        else if (this == SignalExternalWorkflowExecutionInitiated) onSignalExternalWorkflowExecutionInitiated();
        else if (this == SignalExternalWorkflowExecutionFailed) onSignalExternalWorkflowExecutionFailed();
        else if (this == ExternalWorkflowExecutionSignaled) onExternalWorkflowExecutionSignaled();
        else if (this ==
            RequestCancelExternalWorkflowExecutionInitiated) onRequestCancelExternalWorkflowExecutionInitiated();
        else if (this == RequestCancelExternalWorkflowExecutionFailed) onRequestCancelExternalWorkflowExecutionFailed();
        else if (this == ExternalWorkflowExecutionCancelRequested) onExternalWorkflowExecutionCancelRequested();
        else if (this == LambdaFunctionScheduled) onLambdaFunctionScheduled();
        else if (this == LambdaFunctionStarted) onLambdaFunctionStarted();
        else if (this == LambdaFunctionCompleted) onLambdaFunctionCompleted();
        else if (this == LambdaFunctionFailed) onLambdaFunctionFailed();
        else if (this == LambdaFunctionTimedOut) onLambdaFunctionTimedOut();
        else if (this == ScheduleLambdaFunctionFailed) onScheduleLambdaFunctionFailed();
        else if (this == StartLambdaFunctionFailed) onStartLambdaFunctionFailed();
        else otherwise(Value);
    }
}
