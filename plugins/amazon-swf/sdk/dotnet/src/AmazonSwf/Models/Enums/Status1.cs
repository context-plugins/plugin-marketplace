using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The close status that must match the close status of an execution for it to meet the criteria of this filter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Completed = new("COMPLETED");

    public static readonly Status1 Failed = new("FAILED");

    public static readonly Status1 Canceled = new("CANCELED");

    public static readonly Status1 Terminated = new("TERMINATED");

    public static readonly Status1 ContinuedAsNew = new("CONTINUED_AS_NEW");

    public static readonly Status1 TimedOut = new("TIMED_OUT");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onTerminated,
        Func<TResult> onContinuedAsNew,
        Func<TResult> onTimedOut,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == Terminated => onTerminated(),
            _ when this == ContinuedAsNew => onContinuedAsNew(),
            _ when this == TimedOut => onTimedOut(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action onTerminated,
        Action onContinuedAsNew,
        Action onTimedOut,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == Terminated) onTerminated();
        else if (this == ContinuedAsNew) onContinuedAsNew();
        else if (this == TimedOut) onTimedOut();
        else otherwise(Value);
    }
}
