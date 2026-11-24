using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the metadata import.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State16>))]
public sealed record State16 : OpenStringEnum<State16>
{
    private State16(string value) : base(value)
    {
    }

    public static readonly State16 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State16 Running = new("RUNNING");

    public static readonly State16 Succeeded = new("SUCCEEDED");

    public static readonly State16 Updating = new("UPDATING");

    public static readonly State16 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onUpdating,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Updating => onUpdating(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onRunning,
        Action onSucceeded,
        Action onUpdating,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Updating) onUpdating();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
