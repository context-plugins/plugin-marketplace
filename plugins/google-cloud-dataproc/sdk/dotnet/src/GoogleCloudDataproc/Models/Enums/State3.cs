using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. Current state of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3>))]
public sealed record State3 : OpenStringEnum<State3>
{
    private State3(string value) : base(value)
    {
    }

    public static readonly State3 ExecutionStateUnknown = new("EXECUTION_STATE_UNKNOWN");

    public static readonly State3 ExecutionStateStarted = new("EXECUTION_STATE_STARTED");

    public static readonly State3 ExecutionStateCompiled = new("EXECUTION_STATE_COMPILED");

    public static readonly State3 ExecutionStateReady = new("EXECUTION_STATE_READY");

    public static readonly State3 ExecutionStateCanceled = new("EXECUTION_STATE_CANCELED");

    public static readonly State3 ExecutionStateFailed = new("EXECUTION_STATE_FAILED");

    public static readonly State3 ExecutionStateFinished = new("EXECUTION_STATE_FINISHED");

    public static readonly State3 ExecutionStateClosed = new("EXECUTION_STATE_CLOSED");

    public TResult Match<TResult>(Func<TResult> onExecutionStateUnknown,
        Func<TResult> onExecutionStateStarted,
        Func<TResult> onExecutionStateCompiled,
        Func<TResult> onExecutionStateReady,
        Func<TResult> onExecutionStateCanceled,
        Func<TResult> onExecutionStateFailed,
        Func<TResult> onExecutionStateFinished,
        Func<TResult> onExecutionStateClosed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExecutionStateUnknown => onExecutionStateUnknown(),
            _ when this == ExecutionStateStarted => onExecutionStateStarted(),
            _ when this == ExecutionStateCompiled => onExecutionStateCompiled(),
            _ when this == ExecutionStateReady => onExecutionStateReady(),
            _ when this == ExecutionStateCanceled => onExecutionStateCanceled(),
            _ when this == ExecutionStateFailed => onExecutionStateFailed(),
            _ when this == ExecutionStateFinished => onExecutionStateFinished(),
            _ when this == ExecutionStateClosed => onExecutionStateClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onExecutionStateUnknown,
        Action onExecutionStateStarted,
        Action onExecutionStateCompiled,
        Action onExecutionStateReady,
        Action onExecutionStateCanceled,
        Action onExecutionStateFailed,
        Action onExecutionStateFinished,
        Action onExecutionStateClosed,
        Action<string> otherwise)
    {
        if (this == ExecutionStateUnknown) onExecutionStateUnknown();
        else if (this == ExecutionStateStarted) onExecutionStateStarted();
        else if (this == ExecutionStateCompiled) onExecutionStateCompiled();
        else if (this == ExecutionStateReady) onExecutionStateReady();
        else if (this == ExecutionStateCanceled) onExecutionStateCanceled();
        else if (this == ExecutionStateFailed) onExecutionStateFailed();
        else if (this == ExecutionStateFinished) onExecutionStateFinished();
        else if (this == ExecutionStateClosed) onExecutionStateClosed();
        else otherwise(Value);
    }
}
