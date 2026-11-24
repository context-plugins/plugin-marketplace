using System;
using System.Text.Json.Serialization;
using Buildkite.Core.Enum;

namespace Buildkite.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Running = new("running");

    public static readonly State Scheduled = new("scheduled");

    public static readonly State Passed = new("passed");

    public static readonly State Failed = new("failed");

    public static readonly State Blocked = new("blocked");

    public static readonly State Canceled = new("canceled");

    public static readonly State Canceling = new("canceling");

    public static readonly State Skipped = new("skipped");

    public static readonly State NotRun = new("not_run");

    public static readonly State Finished = new("finished");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onScheduled,
        Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onBlocked,
        Func<TResult> onCanceled,
        Func<TResult> onCanceling,
        Func<TResult> onSkipped,
        Func<TResult> onNotRun,
        Func<TResult> onFinished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Blocked => onBlocked(),
            _ when this == Canceled => onCanceled(),
            _ when this == Canceling => onCanceling(),
            _ when this == Skipped => onSkipped(),
            _ when this == NotRun => onNotRun(),
            _ when this == Finished => onFinished(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning,
        Action onScheduled,
        Action onPassed,
        Action onFailed,
        Action onBlocked,
        Action onCanceled,
        Action onCanceling,
        Action onSkipped,
        Action onNotRun,
        Action onFinished,
        Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Scheduled) onScheduled();
        else if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Blocked) onBlocked();
        else if (this == Canceled) onCanceled();
        else if (this == Canceling) onCanceling();
        else if (this == Skipped) onSkipped();
        else if (this == NotRun) onNotRun();
        else if (this == Finished) onFinished();
        else otherwise(Value);
    }
}
