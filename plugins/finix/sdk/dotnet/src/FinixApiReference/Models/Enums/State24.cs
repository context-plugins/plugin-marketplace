using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State24>))]
public sealed record State24 : OpenStringEnum<State24>
{
    private State24(string value) : base(value)
    {
    }

    public static readonly State24 All = new("ALL");

    public static readonly State24 Canceled = new("CANCELED");

    public static readonly State24 Failed = new("FAILED");

    public static readonly State24 Pending = new("PENDING");

    public static readonly State24 Returned = new("RETURNED");

    public static readonly State24 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onCanceled,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onReturned,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Canceled => onCanceled(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Returned => onReturned(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onCanceled,
        Action onFailed,
        Action onPending,
        Action onReturned,
        Action onSucceeded,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Canceled) onCanceled();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Returned) onReturned();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
