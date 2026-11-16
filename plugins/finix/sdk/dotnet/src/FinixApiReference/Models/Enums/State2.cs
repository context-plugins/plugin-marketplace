using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The current state of the <c>Balance Entry</c>.
/// - <c>SUCCEEDED</c>: The balance entry has been successfully posted and affects the account balance.
/// - <c>PENDING</c>: The balance entry is awaiting confirmation and has not yet affected the account balance.
/// - <c>FAILED</c>: The balance entry failed and did not affect the account balance.
/// - <c>RETURNED</c>: The balance entry was returned (e.g., due to an ACH return) and has been reversed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State2>))]
public sealed record State2 : OpenStringEnum<State2>
{
    private State2(string value) : base(value)
    {
    }

    public static readonly State2 Succeeded = new("SUCCEEDED");

    public static readonly State2 Pending = new("PENDING");

    public static readonly State2 Failed = new("FAILED");

    public static readonly State2 Returned = new("RETURNED");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onReturned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Returned => onReturned(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded,
        Action onPending,
        Action onFailed,
        Action onReturned,
        Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Returned) onReturned();
        else otherwise(Value);
    }
}
