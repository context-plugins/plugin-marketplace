using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Why the call ended. <c>null</c> while the call is live and on a normal end.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason NoAnswer = new("no_answer");

    public static readonly Reason Busy = new("busy");

    public static readonly Reason Unreachable = new("unreachable");

    public static readonly Reason Canceled = new("canceled");

    public static readonly Reason TimedOut = new("timed_out");

    public static readonly Reason PlatformError = new("platform_error");

    public TResult Match<TResult>(Func<TResult> onNoAnswer,
        Func<TResult> onBusy,
        Func<TResult> onUnreachable,
        Func<TResult> onCanceled,
        Func<TResult> onTimedOut,
        Func<TResult> onPlatformError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoAnswer => onNoAnswer(),
            _ when this == Busy => onBusy(),
            _ when this == Unreachable => onUnreachable(),
            _ when this == Canceled => onCanceled(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == PlatformError => onPlatformError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoAnswer,
        Action onBusy,
        Action onUnreachable,
        Action onCanceled,
        Action onTimedOut,
        Action onPlatformError,
        Action<string> otherwise)
    {
        if (this == NoAnswer) onNoAnswer();
        else if (this == Busy) onBusy();
        else if (this == Unreachable) onUnreachable();
        else if (this == Canceled) onCanceled();
        else if (this == TimedOut) onTimedOut();
        else if (this == PlatformError) onPlatformError();
        else otherwise(Value);
    }
}
