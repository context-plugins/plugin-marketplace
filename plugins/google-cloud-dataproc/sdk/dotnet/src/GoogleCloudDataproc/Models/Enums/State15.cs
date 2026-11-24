using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the backfill (or dry run).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State15>))]
public sealed record State15 : OpenStringEnum<State15>
{
    private State15(string value) : base(value)
    {
    }

    public static readonly State15 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State15 Pending = new("PENDING");

    public static readonly State15 Running = new("RUNNING");

    public static readonly State15 Succeeded = new("SUCCEEDED");

    public static readonly State15 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onPending,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
