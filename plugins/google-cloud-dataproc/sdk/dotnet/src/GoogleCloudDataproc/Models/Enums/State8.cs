using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The current state of the backup.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State8>))]
public sealed record State8 : OpenStringEnum<State8>
{
    private State8(string value) : base(value)
    {
    }

    public static readonly State8 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State8 InProgress = new("IN_PROGRESS");

    public static readonly State8 Succeeded = new("SUCCEEDED");

    public static readonly State8 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onInProgress,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == InProgress => onInProgress(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onInProgress,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == InProgress) onInProgress();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
