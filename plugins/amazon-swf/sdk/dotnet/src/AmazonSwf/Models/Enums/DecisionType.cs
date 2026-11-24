using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// Specifies the type of the decision.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DecisionType>))]
public sealed record DecisionType : OpenStringEnum<DecisionType>
{
    private DecisionType(string value) : base(value)
    {
    }

    public static readonly DecisionType ScheduleActivityTask = new("ScheduleActivityTask");

    public static readonly DecisionType RequestCancelActivityTask = new("RequestCancelActivityTask");

    public static readonly DecisionType CompleteWorkflowExecution = new("CompleteWorkflowExecution");

    public static readonly DecisionType FailWorkflowExecution = new("FailWorkflowExecution");

    public static readonly DecisionType CancelWorkflowExecution = new("CancelWorkflowExecution");

    public static readonly DecisionType ContinueAsNewWorkflowExecution = new("ContinueAsNewWorkflowExecution");

    public static readonly DecisionType RecordMarker = new("RecordMarker");

    public static readonly DecisionType StartTimer = new("StartTimer");

    public static readonly DecisionType CancelTimer = new("CancelTimer");

    public static readonly DecisionType SignalExternalWorkflowExecution = new("SignalExternalWorkflowExecution");

    public static readonly DecisionType RequestCancelExternalWorkflowExecution = new(
        "RequestCancelExternalWorkflowExecution");

    public static readonly DecisionType StartChildWorkflowExecution = new("StartChildWorkflowExecution");

    public static readonly DecisionType ScheduleLambdaFunction = new("ScheduleLambdaFunction");

    public TResult Match<TResult>(Func<TResult> onScheduleActivityTask,
        Func<TResult> onRequestCancelActivityTask,
        Func<TResult> onCompleteWorkflowExecution,
        Func<TResult> onFailWorkflowExecution,
        Func<TResult> onCancelWorkflowExecution,
        Func<TResult> onContinueAsNewWorkflowExecution,
        Func<TResult> onRecordMarker,
        Func<TResult> onStartTimer,
        Func<TResult> onCancelTimer,
        Func<TResult> onSignalExternalWorkflowExecution,
        Func<TResult> onRequestCancelExternalWorkflowExecution,
        Func<TResult> onStartChildWorkflowExecution,
        Func<TResult> onScheduleLambdaFunction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ScheduleActivityTask => onScheduleActivityTask(),
            _ when this == RequestCancelActivityTask => onRequestCancelActivityTask(),
            _ when this == CompleteWorkflowExecution => onCompleteWorkflowExecution(),
            _ when this == FailWorkflowExecution => onFailWorkflowExecution(),
            _ when this == CancelWorkflowExecution => onCancelWorkflowExecution(),
            _ when this == ContinueAsNewWorkflowExecution => onContinueAsNewWorkflowExecution(),
            _ when this == RecordMarker => onRecordMarker(),
            _ when this == StartTimer => onStartTimer(),
            _ when this == CancelTimer => onCancelTimer(),
            _ when this == SignalExternalWorkflowExecution => onSignalExternalWorkflowExecution(),
            _ when this == RequestCancelExternalWorkflowExecution => onRequestCancelExternalWorkflowExecution(),
            _ when this == StartChildWorkflowExecution => onStartChildWorkflowExecution(),
            _ when this == ScheduleLambdaFunction => onScheduleLambdaFunction(),
            _ => otherwise(Value)
        };

    public void Match(Action onScheduleActivityTask,
        Action onRequestCancelActivityTask,
        Action onCompleteWorkflowExecution,
        Action onFailWorkflowExecution,
        Action onCancelWorkflowExecution,
        Action onContinueAsNewWorkflowExecution,
        Action onRecordMarker,
        Action onStartTimer,
        Action onCancelTimer,
        Action onSignalExternalWorkflowExecution,
        Action onRequestCancelExternalWorkflowExecution,
        Action onStartChildWorkflowExecution,
        Action onScheduleLambdaFunction,
        Action<string> otherwise)
    {
        if (this == ScheduleActivityTask) onScheduleActivityTask();
        else if (this == RequestCancelActivityTask) onRequestCancelActivityTask();
        else if (this == CompleteWorkflowExecution) onCompleteWorkflowExecution();
        else if (this == FailWorkflowExecution) onFailWorkflowExecution();
        else if (this == CancelWorkflowExecution) onCancelWorkflowExecution();
        else if (this == ContinueAsNewWorkflowExecution) onContinueAsNewWorkflowExecution();
        else if (this == RecordMarker) onRecordMarker();
        else if (this == StartTimer) onStartTimer();
        else if (this == CancelTimer) onCancelTimer();
        else if (this == SignalExternalWorkflowExecution) onSignalExternalWorkflowExecution();
        else if (this == RequestCancelExternalWorkflowExecution) onRequestCancelExternalWorkflowExecution();
        else if (this == StartChildWorkflowExecution) onStartChildWorkflowExecution();
        else if (this == ScheduleLambdaFunction) onScheduleLambdaFunction();
        else otherwise(Value);
    }
}
