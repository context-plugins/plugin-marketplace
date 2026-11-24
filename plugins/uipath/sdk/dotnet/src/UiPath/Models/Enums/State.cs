using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Current execution state of the job
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Pending = new("Pending");

    public static readonly State Running = new("Running");

    public static readonly State Stopping = new("Stopping");

    public static readonly State Terminating = new("Terminating");

    public static readonly State Faulted = new("Faulted");

    public static readonly State Successful = new("Successful");

    public static readonly State Stopped = new("Stopped");

    public static readonly State Suspended = new("Suspended");

    public static readonly State Resumed = new("Resumed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onStopping,
        Func<TResult> onTerminating,
        Func<TResult> onFaulted,
        Func<TResult> onSuccessful,
        Func<TResult> onStopped,
        Func<TResult> onSuspended,
        Func<TResult> onResumed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Stopping => onStopping(),
            _ when this == Terminating => onTerminating(),
            _ when this == Faulted => onFaulted(),
            _ when this == Successful => onSuccessful(),
            _ when this == Stopped => onStopped(),
            _ when this == Suspended => onSuspended(),
            _ when this == Resumed => onResumed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onStopping,
        Action onTerminating,
        Action onFaulted,
        Action onSuccessful,
        Action onStopped,
        Action onSuspended,
        Action onResumed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Stopping) onStopping();
        else if (this == Terminating) onTerminating();
        else if (this == Faulted) onFaulted();
        else if (this == Successful) onSuccessful();
        else if (this == Stopped) onStopped();
        else if (this == Suspended) onSuspended();
        else if (this == Resumed) onResumed();
        else otherwise(Value);
    }
}
