using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State21>))]
public sealed record State21 : OpenStringEnum<State21>
{
    private State21(string value) : base(value)
    {
    }

    public static readonly State21 Succeeded = new("SUCCEEDED");

    public static readonly State21 Failed = new("FAILED");

    public static readonly State21 Pending = new("PENDING");

    public static readonly State21 Canceled = new("CANCELED");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded,
        Action onFailed,
        Action onPending,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
