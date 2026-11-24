using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The state of the build.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State2>))]
public sealed record State2 : OpenStringEnum<State2>
{
    private State2(string value) : base(value)
    {
    }

    public static readonly State2 InProgress = new("IN_PROGRESS");

    public static readonly State2 Successful = new("SUCCESSFUL");

    public static readonly State2 Cancelled = new("CANCELLED");

    public static readonly State2 Failed = new("FAILED");

    public static readonly State2 Error = new("ERROR");

    public static readonly State2 TimedOut = new("TIMED_OUT");

    public static readonly State2 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onSuccessful,
        Func<TResult> onCancelled,
        Func<TResult> onFailed,
        Func<TResult> onError,
        Func<TResult> onTimedOut,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Successful => onSuccessful(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Failed => onFailed(),
            _ when this == Error => onError(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onSuccessful,
        Action onCancelled,
        Action onFailed,
        Action onError,
        Action onTimedOut,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Successful) onSuccessful();
        else if (this == Cancelled) onCancelled();
        else if (this == Failed) onFailed();
        else if (this == Error) onError();
        else if (this == TimedOut) onTimedOut();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
