using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the payment instrument verification request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State9>))]
public sealed record State9 : OpenStringEnum<State9>
{
    private State9(string value) : base(value)
    {
    }

    public static readonly State9 Pending = new("PENDING");

    public static readonly State9 Failed = new("FAILED");

    public static readonly State9 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onFailed, Action onSucceeded, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
