using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// If the execution status is closed then this specifies how the execution was closed: COMPLETED – the execution was successfully completed. CANCELED – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed. TERMINATED – the execution was force terminated. FAILED – the execution failed to complete. TIMED_OUT – the execution did not complete in the alloted time and was automatically timed out. CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was completed and a new execution was started to car
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CloseStatus>))]
public sealed record CloseStatus : OpenStringEnum<CloseStatus>
{
    private CloseStatus(string value) : base(value)
    {
    }

    public static readonly CloseStatus Completed = new("COMPLETED");

    public static readonly CloseStatus Failed = new("FAILED");

    public static readonly CloseStatus Canceled = new("CANCELED");

    public static readonly CloseStatus Terminated = new("TERMINATED");

    public static readonly CloseStatus ContinuedAsNew = new("CONTINUED_AS_NEW");

    public static readonly CloseStatus TimedOut = new("TIMED_OUT");

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
