using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The state of the batch at this point in history.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State6>))]
public sealed record State6 : OpenStringEnum<State6>
{
    private State6(string value) : base(value)
    {
    }

    public static readonly State6 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State6 Pending = new("PENDING");

    public static readonly State6 Running = new("RUNNING");

    public static readonly State6 Cancelling = new("CANCELLING");

    public static readonly State6 Cancelled = new("CANCELLED");

    public static readonly State6 Succeeded = new("SUCCEEDED");

    public static readonly State6 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onCancelling,
        Func<TResult> onCancelled,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onPending,
        Action onRunning,
        Action onCancelling,
        Action onCancelled,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Cancelling) onCancelling();
        else if (this == Cancelled) onCancelled();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
