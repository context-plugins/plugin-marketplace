using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Output only. Backfill job state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State NotStarted = new("NOT_STARTED");

    public static readonly State Pending = new("PENDING");

    public static readonly State Active = new("ACTIVE");

    public static readonly State Stopped = new("STOPPED");

    public static readonly State Failed = new("FAILED");

    public static readonly State Completed = new("COMPLETED");

    public static readonly State Unsupported = new("UNSUPPORTED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onNotStarted,
        Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onStopped,
        Func<TResult> onFailed,
        Func<TResult> onCompleted,
        Func<TResult> onUnsupported,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == NotStarted => onNotStarted(),
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Stopped => onStopped(),
            _ when this == Failed => onFailed(),
            _ when this == Completed => onCompleted(),
            _ when this == Unsupported => onUnsupported(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onNotStarted,
        Action onPending,
        Action onActive,
        Action onStopped,
        Action onFailed,
        Action onCompleted,
        Action onUnsupported,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == NotStarted) onNotStarted();
        else if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Stopped) onStopped();
        else if (this == Failed) onFailed();
        else if (this == Completed) onCompleted();
        else if (this == Unsupported) onUnsupported();
        else otherwise(Value);
    }
}
