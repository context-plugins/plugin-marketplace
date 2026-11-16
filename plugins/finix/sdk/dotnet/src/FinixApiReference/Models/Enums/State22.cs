using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State22>))]
public sealed record State22 : OpenStringEnum<State22>
{
    private State22(string value) : base(value)
    {
    }

    public static readonly State22 Failed = new("FAILED");

    public static readonly State22 Pending = new("PENDING");

    public static readonly State22 Returned = new("RETURNED");

    public static readonly State22 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onReturned,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Returned => onReturned(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed,
        Action onPending,
        Action onReturned,
        Action onSucceeded,
        Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Returned) onReturned();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
