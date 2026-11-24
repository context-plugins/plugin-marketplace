using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed. FAULT The sandbox phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED The sandbox phase stopped. SUCCEEDED The sandbox phase succeeded. TIMED_OUT The sandbox phase timed out.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhaseStatus>))]
public sealed record PhaseStatus : OpenStringEnum<PhaseStatus>
{
    private PhaseStatus(string value) : base(value)
    {
    }

    public static readonly PhaseStatus Succeeded = new("SUCCEEDED");

    public static readonly PhaseStatus Failed = new("FAILED");

    public static readonly PhaseStatus Fault = new("FAULT");

    public static readonly PhaseStatus TimedOut = new("TIMED_OUT");

    public static readonly PhaseStatus InProgress = new("IN_PROGRESS");

    public static readonly PhaseStatus Stopped = new("STOPPED");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onFault,
        Func<TResult> onTimedOut,
        Func<TResult> onInProgress,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Fault => onFault(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == InProgress => onInProgress(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded,
        Action onFailed,
        Action onFault,
        Action onTimedOut,
        Action onInProgress,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Fault) onFault();
        else if (this == TimedOut) onTimedOut();
        else if (this == InProgress) onInProgress();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
