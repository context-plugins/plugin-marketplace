using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State25>))]
public sealed record State25 : OpenStringEnum<State25>
{
    private State25(string value) : base(value)
    {
    }

    public static readonly State25 Failed = new("FAILED");

    public static readonly State25 Pending = new("PENDING");

    public static readonly State25 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed, Action onPending, Action onSucceeded, Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
