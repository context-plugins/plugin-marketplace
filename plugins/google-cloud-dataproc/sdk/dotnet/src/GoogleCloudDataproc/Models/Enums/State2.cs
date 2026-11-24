using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The cluster's state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State2>))]
public sealed record State2 : OpenStringEnum<State2>
{
    private State2(string value) : base(value)
    {
    }

    public static readonly State2 Unknown = new("UNKNOWN");

    public static readonly State2 Creating = new("CREATING");

    public static readonly State2 Running = new("RUNNING");

    public static readonly State2 Error = new("ERROR");

    public static readonly State2 ErrorDueToUpdate = new("ERROR_DUE_TO_UPDATE");

    public static readonly State2 Deleting = new("DELETING");

    public static readonly State2 Updating = new("UPDATING");

    public static readonly State2 Stopping = new("STOPPING");

    public static readonly State2 Stopped = new("STOPPED");

    public static readonly State2 Starting = new("STARTING");

    public static readonly State2 Repairing = new("REPAIRING");

    public static readonly State2 Scheduled = new("SCHEDULED");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onCreating,
        Func<TResult> onRunning,
        Func<TResult> onError,
        Func<TResult> onErrorDueToUpdate,
        Func<TResult> onDeleting,
        Func<TResult> onUpdating,
        Func<TResult> onStopping,
        Func<TResult> onStopped,
        Func<TResult> onStarting,
        Func<TResult> onRepairing,
        Func<TResult> onScheduled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == Creating => onCreating(),
            _ when this == Running => onRunning(),
            _ when this == Error => onError(),
            _ when this == ErrorDueToUpdate => onErrorDueToUpdate(),
            _ when this == Deleting => onDeleting(),
            _ when this == Updating => onUpdating(),
            _ when this == Stopping => onStopping(),
            _ when this == Stopped => onStopped(),
            _ when this == Starting => onStarting(),
            _ when this == Repairing => onRepairing(),
            _ when this == Scheduled => onScheduled(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onCreating,
        Action onRunning,
        Action onError,
        Action onErrorDueToUpdate,
        Action onDeleting,
        Action onUpdating,
        Action onStopping,
        Action onStopped,
        Action onStarting,
        Action onRepairing,
        Action onScheduled,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == Creating) onCreating();
        else if (this == Running) onRunning();
        else if (this == Error) onError();
        else if (this == ErrorDueToUpdate) onErrorDueToUpdate();
        else if (this == Deleting) onDeleting();
        else if (this == Updating) onUpdating();
        else if (this == Stopping) onStopping();
        else if (this == Stopped) onStopped();
        else if (this == Starting) onStarting();
        else if (this == Repairing) onRepairing();
        else if (this == Scheduled) onScheduled();
        else otherwise(Value);
    }
}
