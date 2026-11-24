using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the export.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State9>))]
public sealed record State9 : OpenStringEnum<State9>
{
    private State9(string value) : base(value)
    {
    }

    public static readonly State9 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State9 Running = new("RUNNING");

    public static readonly State9 Succeeded = new("SUCCEEDED");

    public static readonly State9 Failed = new("FAILED");

    public static readonly State9 Cancelled = new("CANCELLED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
