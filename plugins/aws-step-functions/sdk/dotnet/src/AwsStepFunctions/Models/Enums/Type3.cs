using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The type of the event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 ActivityFailed = new("ActivityFailed");

    public static readonly Type3 ActivityScheduled = new("ActivityScheduled");

    public static readonly Type3 ActivityScheduleFailed = new("ActivityScheduleFailed");

    public static readonly Type3 ActivityStarted = new("ActivityStarted");

    public static readonly Type3 ActivitySucceeded = new("ActivitySucceeded");

    public static readonly Type3 ActivityTimedOut = new("ActivityTimedOut");

    public static readonly Type3 ChoiceStateEntered = new("ChoiceStateEntered");

    public static readonly Type3 ChoiceStateExited = new("ChoiceStateExited");

    public static readonly Type3 ExecutionAborted = new("ExecutionAborted");

    public static readonly Type3 ExecutionFailed = new("ExecutionFailed");

    public static readonly Type3 ExecutionStarted = new("ExecutionStarted");

    public static readonly Type3 ExecutionSucceeded = new("ExecutionSucceeded");

    public static readonly Type3 ExecutionTimedOut = new("ExecutionTimedOut");

    public static readonly Type3 FailStateEntered = new("FailStateEntered");

    public static readonly Type3 LambdaFunctionFailed = new("LambdaFunctionFailed");

    public static readonly Type3 LambdaFunctionScheduled = new("LambdaFunctionScheduled");

    public static readonly Type3 LambdaFunctionScheduleFailed = new("LambdaFunctionScheduleFailed");

    public static readonly Type3 LambdaFunctionStarted = new("LambdaFunctionStarted");

    public static readonly Type3 LambdaFunctionStartFailed = new("LambdaFunctionStartFailed");

    public static readonly Type3 LambdaFunctionSucceeded = new("LambdaFunctionSucceeded");

    public static readonly Type3 LambdaFunctionTimedOut = new("LambdaFunctionTimedOut");

    public static readonly Type3 MapIterationAborted = new("MapIterationAborted");

    public static readonly Type3 MapIterationFailed = new("MapIterationFailed");

    public static readonly Type3 MapIterationStarted = new("MapIterationStarted");

    public static readonly Type3 MapIterationSucceeded = new("MapIterationSucceeded");

    public static readonly Type3 MapStateAborted = new("MapStateAborted");

    public static readonly Type3 MapStateEntered = new("MapStateEntered");

    public static readonly Type3 MapStateExited = new("MapStateExited");

    public static readonly Type3 MapStateFailed = new("MapStateFailed");

    public static readonly Type3 MapStateStarted = new("MapStateStarted");

    public static readonly Type3 MapStateSucceeded = new("MapStateSucceeded");

    public static readonly Type3 ParallelStateAborted = new("ParallelStateAborted");

    public static readonly Type3 ParallelStateEntered = new("ParallelStateEntered");

    public static readonly Type3 ParallelStateExited = new("ParallelStateExited");

    public static readonly Type3 ParallelStateFailed = new("ParallelStateFailed");

    public static readonly Type3 ParallelStateStarted = new("ParallelStateStarted");

    public static readonly Type3 ParallelStateSucceeded = new("ParallelStateSucceeded");

    public static readonly Type3 PassStateEntered = new("PassStateEntered");

    public static readonly Type3 PassStateExited = new("PassStateExited");

    public static readonly Type3 SucceedStateEntered = new("SucceedStateEntered");

    public static readonly Type3 SucceedStateExited = new("SucceedStateExited");

    public static readonly Type3 TaskFailed = new("TaskFailed");

    public static readonly Type3 TaskScheduled = new("TaskScheduled");

    public static readonly Type3 TaskStarted = new("TaskStarted");

    public static readonly Type3 TaskStartFailed = new("TaskStartFailed");

    public static readonly Type3 TaskStateAborted = new("TaskStateAborted");

    public static readonly Type3 TaskStateEntered = new("TaskStateEntered");

    public static readonly Type3 TaskStateExited = new("TaskStateExited");

    public static readonly Type3 TaskSubmitFailed = new("TaskSubmitFailed");

    public static readonly Type3 TaskSubmitted = new("TaskSubmitted");

    public static readonly Type3 TaskSucceeded = new("TaskSucceeded");

    public static readonly Type3 TaskTimedOut = new("TaskTimedOut");

    public static readonly Type3 WaitStateAborted = new("WaitStateAborted");

    public static readonly Type3 WaitStateEntered = new("WaitStateEntered");

    public static readonly Type3 WaitStateExited = new("WaitStateExited");

    public static readonly Type3 MapRunAborted = new("MapRunAborted");

    public static readonly Type3 MapRunFailed = new("MapRunFailed");

    public static readonly Type3 MapRunStarted = new("MapRunStarted");

    public static readonly Type3 MapRunSucceeded = new("MapRunSucceeded");

    public static readonly Type3 ExecutionRedriven = new("ExecutionRedriven");

    public static readonly Type3 MapRunRedriven = new("MapRunRedriven");

    public static readonly Type3 EvaluationFailed = new("EvaluationFailed");

    public TResult Match<TResult>(Func<TResult> onActivityFailed,
        Func<TResult> onActivityScheduled,
        Func<TResult> onActivityScheduleFailed,
        Func<TResult> onActivityStarted,
        Func<TResult> onActivitySucceeded,
        Func<TResult> onActivityTimedOut,
        Func<TResult> onChoiceStateEntered,
        Func<TResult> onChoiceStateExited,
        Func<TResult> onExecutionAborted,
        Func<TResult> onExecutionFailed,
        Func<TResult> onExecutionStarted,
        Func<TResult> onExecutionSucceeded,
        Func<TResult> onExecutionTimedOut,
        Func<TResult> onFailStateEntered,
        Func<TResult> onLambdaFunctionFailed,
        Func<TResult> onLambdaFunctionScheduled,
        Func<TResult> onLambdaFunctionScheduleFailed,
        Func<TResult> onLambdaFunctionStarted,
        Func<TResult> onLambdaFunctionStartFailed,
        Func<TResult> onLambdaFunctionSucceeded,
        Func<TResult> onLambdaFunctionTimedOut,
        Func<TResult> onMapIterationAborted,
        Func<TResult> onMapIterationFailed,
        Func<TResult> onMapIterationStarted,
        Func<TResult> onMapIterationSucceeded,
        Func<TResult> onMapStateAborted,
        Func<TResult> onMapStateEntered,
        Func<TResult> onMapStateExited,
        Func<TResult> onMapStateFailed,
        Func<TResult> onMapStateStarted,
        Func<TResult> onMapStateSucceeded,
        Func<TResult> onParallelStateAborted,
        Func<TResult> onParallelStateEntered,
        Func<TResult> onParallelStateExited,
        Func<TResult> onParallelStateFailed,
        Func<TResult> onParallelStateStarted,
        Func<TResult> onParallelStateSucceeded,
        Func<TResult> onPassStateEntered,
        Func<TResult> onPassStateExited,
        Func<TResult> onSucceedStateEntered,
        Func<TResult> onSucceedStateExited,
        Func<TResult> onTaskFailed,
        Func<TResult> onTaskScheduled,
        Func<TResult> onTaskStarted,
        Func<TResult> onTaskStartFailed,
        Func<TResult> onTaskStateAborted,
        Func<TResult> onTaskStateEntered,
        Func<TResult> onTaskStateExited,
        Func<TResult> onTaskSubmitFailed,
        Func<TResult> onTaskSubmitted,
        Func<TResult> onTaskSucceeded,
        Func<TResult> onTaskTimedOut,
        Func<TResult> onWaitStateAborted,
        Func<TResult> onWaitStateEntered,
        Func<TResult> onWaitStateExited,
        Func<TResult> onMapRunAborted,
        Func<TResult> onMapRunFailed,
        Func<TResult> onMapRunStarted,
        Func<TResult> onMapRunSucceeded,
        Func<TResult> onExecutionRedriven,
        Func<TResult> onMapRunRedriven,
        Func<TResult> onEvaluationFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActivityFailed => onActivityFailed(),
            _ when this == ActivityScheduled => onActivityScheduled(),
            _ when this == ActivityScheduleFailed => onActivityScheduleFailed(),
            _ when this == ActivityStarted => onActivityStarted(),
            _ when this == ActivitySucceeded => onActivitySucceeded(),
            _ when this == ActivityTimedOut => onActivityTimedOut(),
            _ when this == ChoiceStateEntered => onChoiceStateEntered(),
            _ when this == ChoiceStateExited => onChoiceStateExited(),
            _ when this == ExecutionAborted => onExecutionAborted(),
            _ when this == ExecutionFailed => onExecutionFailed(),
            _ when this == ExecutionStarted => onExecutionStarted(),
            _ when this == ExecutionSucceeded => onExecutionSucceeded(),
            _ when this == ExecutionTimedOut => onExecutionTimedOut(),
            _ when this == FailStateEntered => onFailStateEntered(),
            _ when this == LambdaFunctionFailed => onLambdaFunctionFailed(),
            _ when this == LambdaFunctionScheduled => onLambdaFunctionScheduled(),
            _ when this == LambdaFunctionScheduleFailed => onLambdaFunctionScheduleFailed(),
            _ when this == LambdaFunctionStarted => onLambdaFunctionStarted(),
            _ when this == LambdaFunctionStartFailed => onLambdaFunctionStartFailed(),
            _ when this == LambdaFunctionSucceeded => onLambdaFunctionSucceeded(),
            _ when this == LambdaFunctionTimedOut => onLambdaFunctionTimedOut(),
            _ when this == MapIterationAborted => onMapIterationAborted(),
            _ when this == MapIterationFailed => onMapIterationFailed(),
            _ when this == MapIterationStarted => onMapIterationStarted(),
            _ when this == MapIterationSucceeded => onMapIterationSucceeded(),
            _ when this == MapStateAborted => onMapStateAborted(),
            _ when this == MapStateEntered => onMapStateEntered(),
            _ when this == MapStateExited => onMapStateExited(),
            _ when this == MapStateFailed => onMapStateFailed(),
            _ when this == MapStateStarted => onMapStateStarted(),
            _ when this == MapStateSucceeded => onMapStateSucceeded(),
            _ when this == ParallelStateAborted => onParallelStateAborted(),
            _ when this == ParallelStateEntered => onParallelStateEntered(),
            _ when this == ParallelStateExited => onParallelStateExited(),
            _ when this == ParallelStateFailed => onParallelStateFailed(),
            _ when this == ParallelStateStarted => onParallelStateStarted(),
            _ when this == ParallelStateSucceeded => onParallelStateSucceeded(),
            _ when this == PassStateEntered => onPassStateEntered(),
            _ when this == PassStateExited => onPassStateExited(),
            _ when this == SucceedStateEntered => onSucceedStateEntered(),
            _ when this == SucceedStateExited => onSucceedStateExited(),
            _ when this == TaskFailed => onTaskFailed(),
            _ when this == TaskScheduled => onTaskScheduled(),
            _ when this == TaskStarted => onTaskStarted(),
            _ when this == TaskStartFailed => onTaskStartFailed(),
            _ when this == TaskStateAborted => onTaskStateAborted(),
            _ when this == TaskStateEntered => onTaskStateEntered(),
            _ when this == TaskStateExited => onTaskStateExited(),
            _ when this == TaskSubmitFailed => onTaskSubmitFailed(),
            _ when this == TaskSubmitted => onTaskSubmitted(),
            _ when this == TaskSucceeded => onTaskSucceeded(),
            _ when this == TaskTimedOut => onTaskTimedOut(),
            _ when this == WaitStateAborted => onWaitStateAborted(),
            _ when this == WaitStateEntered => onWaitStateEntered(),
            _ when this == WaitStateExited => onWaitStateExited(),
            _ when this == MapRunAborted => onMapRunAborted(),
            _ when this == MapRunFailed => onMapRunFailed(),
            _ when this == MapRunStarted => onMapRunStarted(),
            _ when this == MapRunSucceeded => onMapRunSucceeded(),
            _ when this == ExecutionRedriven => onExecutionRedriven(),
            _ when this == MapRunRedriven => onMapRunRedriven(),
            _ when this == EvaluationFailed => onEvaluationFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActivityFailed,
        Action onActivityScheduled,
        Action onActivityScheduleFailed,
        Action onActivityStarted,
        Action onActivitySucceeded,
        Action onActivityTimedOut,
        Action onChoiceStateEntered,
        Action onChoiceStateExited,
        Action onExecutionAborted,
        Action onExecutionFailed,
        Action onExecutionStarted,
        Action onExecutionSucceeded,
        Action onExecutionTimedOut,
        Action onFailStateEntered,
        Action onLambdaFunctionFailed,
        Action onLambdaFunctionScheduled,
        Action onLambdaFunctionScheduleFailed,
        Action onLambdaFunctionStarted,
        Action onLambdaFunctionStartFailed,
        Action onLambdaFunctionSucceeded,
        Action onLambdaFunctionTimedOut,
        Action onMapIterationAborted,
        Action onMapIterationFailed,
        Action onMapIterationStarted,
        Action onMapIterationSucceeded,
        Action onMapStateAborted,
        Action onMapStateEntered,
        Action onMapStateExited,
        Action onMapStateFailed,
        Action onMapStateStarted,
        Action onMapStateSucceeded,
        Action onParallelStateAborted,
        Action onParallelStateEntered,
        Action onParallelStateExited,
        Action onParallelStateFailed,
        Action onParallelStateStarted,
        Action onParallelStateSucceeded,
        Action onPassStateEntered,
        Action onPassStateExited,
        Action onSucceedStateEntered,
        Action onSucceedStateExited,
        Action onTaskFailed,
        Action onTaskScheduled,
        Action onTaskStarted,
        Action onTaskStartFailed,
        Action onTaskStateAborted,
        Action onTaskStateEntered,
        Action onTaskStateExited,
        Action onTaskSubmitFailed,
        Action onTaskSubmitted,
        Action onTaskSucceeded,
        Action onTaskTimedOut,
        Action onWaitStateAborted,
        Action onWaitStateEntered,
        Action onWaitStateExited,
        Action onMapRunAborted,
        Action onMapRunFailed,
        Action onMapRunStarted,
        Action onMapRunSucceeded,
        Action onExecutionRedriven,
        Action onMapRunRedriven,
        Action onEvaluationFailed,
        Action<string> otherwise)
    {
        if (this == ActivityFailed) onActivityFailed();
        else if (this == ActivityScheduled) onActivityScheduled();
        else if (this == ActivityScheduleFailed) onActivityScheduleFailed();
        else if (this == ActivityStarted) onActivityStarted();
        else if (this == ActivitySucceeded) onActivitySucceeded();
        else if (this == ActivityTimedOut) onActivityTimedOut();
        else if (this == ChoiceStateEntered) onChoiceStateEntered();
        else if (this == ChoiceStateExited) onChoiceStateExited();
        else if (this == ExecutionAborted) onExecutionAborted();
        else if (this == ExecutionFailed) onExecutionFailed();
        else if (this == ExecutionStarted) onExecutionStarted();
        else if (this == ExecutionSucceeded) onExecutionSucceeded();
        else if (this == ExecutionTimedOut) onExecutionTimedOut();
        else if (this == FailStateEntered) onFailStateEntered();
        else if (this == LambdaFunctionFailed) onLambdaFunctionFailed();
        else if (this == LambdaFunctionScheduled) onLambdaFunctionScheduled();
        else if (this == LambdaFunctionScheduleFailed) onLambdaFunctionScheduleFailed();
        else if (this == LambdaFunctionStarted) onLambdaFunctionStarted();
        else if (this == LambdaFunctionStartFailed) onLambdaFunctionStartFailed();
        else if (this == LambdaFunctionSucceeded) onLambdaFunctionSucceeded();
        else if (this == LambdaFunctionTimedOut) onLambdaFunctionTimedOut();
        else if (this == MapIterationAborted) onMapIterationAborted();
        else if (this == MapIterationFailed) onMapIterationFailed();
        else if (this == MapIterationStarted) onMapIterationStarted();
        else if (this == MapIterationSucceeded) onMapIterationSucceeded();
        else if (this == MapStateAborted) onMapStateAborted();
        else if (this == MapStateEntered) onMapStateEntered();
        else if (this == MapStateExited) onMapStateExited();
        else if (this == MapStateFailed) onMapStateFailed();
        else if (this == MapStateStarted) onMapStateStarted();
        else if (this == MapStateSucceeded) onMapStateSucceeded();
        else if (this == ParallelStateAborted) onParallelStateAborted();
        else if (this == ParallelStateEntered) onParallelStateEntered();
        else if (this == ParallelStateExited) onParallelStateExited();
        else if (this == ParallelStateFailed) onParallelStateFailed();
        else if (this == ParallelStateStarted) onParallelStateStarted();
        else if (this == ParallelStateSucceeded) onParallelStateSucceeded();
        else if (this == PassStateEntered) onPassStateEntered();
        else if (this == PassStateExited) onPassStateExited();
        else if (this == SucceedStateEntered) onSucceedStateEntered();
        else if (this == SucceedStateExited) onSucceedStateExited();
        else if (this == TaskFailed) onTaskFailed();
        else if (this == TaskScheduled) onTaskScheduled();
        else if (this == TaskStarted) onTaskStarted();
        else if (this == TaskStartFailed) onTaskStartFailed();
        else if (this == TaskStateAborted) onTaskStateAborted();
        else if (this == TaskStateEntered) onTaskStateEntered();
        else if (this == TaskStateExited) onTaskStateExited();
        else if (this == TaskSubmitFailed) onTaskSubmitFailed();
        else if (this == TaskSubmitted) onTaskSubmitted();
        else if (this == TaskSucceeded) onTaskSucceeded();
        else if (this == TaskTimedOut) onTaskTimedOut();
        else if (this == WaitStateAborted) onWaitStateAborted();
        else if (this == WaitStateEntered) onWaitStateEntered();
        else if (this == WaitStateExited) onWaitStateExited();
        else if (this == MapRunAborted) onMapRunAborted();
        else if (this == MapRunFailed) onMapRunFailed();
        else if (this == MapRunStarted) onMapRunStarted();
        else if (this == MapRunSucceeded) onMapRunSucceeded();
        else if (this == ExecutionRedriven) onExecutionRedriven();
        else if (this == MapRunRedriven) onMapRunRedriven();
        else if (this == EvaluationFailed) onEvaluationFailed();
        else otherwise(Value);
    }
}
