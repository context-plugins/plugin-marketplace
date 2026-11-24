using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The current status of the build. Valid values include: FAILED: The build failed. FAULT: The build faulted. IN_PROGRESS: The build is still in progress. STOPPED: The build stopped. SUCCEEDED: The build succeeded. TIMED_OUT: The build timed out.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BuildStatus>))]
public sealed record BuildStatus : OpenStringEnum<BuildStatus>
{
    private BuildStatus(string value) : base(value)
    {
    }

    public static readonly BuildStatus Succeeded = new("SUCCEEDED");

    public static readonly BuildStatus Failed = new("FAILED");

    public static readonly BuildStatus Fault = new("FAULT");

    public static readonly BuildStatus TimedOut = new("TIMED_OUT");

    public static readonly BuildStatus InProgress = new("IN_PROGRESS");

    public static readonly BuildStatus Stopped = new("STOPPED");

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
