using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the migration execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State14>))]
public sealed record State14 : OpenStringEnum<State14>
{
    private State14(string value) : base(value)
    {
    }

    public static readonly State14 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State14 Starting = new("STARTING");

    public static readonly State14 Running = new("RUNNING");

    public static readonly State14 Cancelling = new("CANCELLING");

    public static readonly State14 AwaitingUserAction = new("AWAITING_USER_ACTION");

    public static readonly State14 Succeeded = new("SUCCEEDED");

    public static readonly State14 Failed = new("FAILED");

    public static readonly State14 Cancelled = new("CANCELLED");

    public static readonly State14 Deleting = new("DELETING");

    public static readonly State14 RolledBack = new("ROLLED_BACK");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onStarting,
        Func<TResult> onRunning,
        Func<TResult> onCancelling,
        Func<TResult> onAwaitingUserAction,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<TResult> onDeleting,
        Func<TResult> onRolledBack,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Starting => onStarting(),
            _ when this == Running => onRunning(),
            _ when this == Cancelling => onCancelling(),
            _ when this == AwaitingUserAction => onAwaitingUserAction(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Deleting => onDeleting(),
            _ when this == RolledBack => onRolledBack(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onStarting,
        Action onRunning,
        Action onCancelling,
        Action onAwaitingUserAction,
        Action onSucceeded,
        Action onFailed,
        Action onCancelled,
        Action onDeleting,
        Action onRolledBack,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Starting) onStarting();
        else if (this == Running) onRunning();
        else if (this == Cancelling) onCancelling();
        else if (this == AwaitingUserAction) onAwaitingUserAction();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else if (this == Deleting) onDeleting();
        else if (this == RolledBack) onRolledBack();
        else otherwise(Value);
    }
}
