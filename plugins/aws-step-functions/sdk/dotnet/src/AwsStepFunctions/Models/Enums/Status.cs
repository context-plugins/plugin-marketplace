using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The current status of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Running = new("RUNNING");

    public static readonly Status Succeeded = new("SUCCEEDED");

    public static readonly Status Failed = new("FAILED");

    public static readonly Status TimedOut = new("TIMED_OUT");

    public static readonly Status Aborted = new("ABORTED");

    public static readonly Status PendingRedrive = new("PENDING_REDRIVE");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onTimedOut,
        Func<TResult> onAborted,
        Func<TResult> onPendingRedrive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Aborted => onAborted(),
            _ when this == PendingRedrive => onPendingRedrive(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onTimedOut,
        Action onAborted,
        Action onPendingRedrive,
        Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == TimedOut) onTimedOut();
        else if (this == Aborted) onAborted();
        else if (this == PendingRedrive) onPendingRedrive();
        else otherwise(Value);
    }
}
