using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The status of the <c>Transfer</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State11>))]
public sealed record State11 : OpenStringEnum<State11>
{
    private State11(string value) : base(value)
    {
    }

    public static readonly State11 Canceled = new("CANCELED");

    public static readonly State11 Pending = new("PENDING");

    public static readonly State11 Failed = new("FAILED");

    public static readonly State11 Succeeded = new("SUCCEEDED");

    public static readonly State11 Unknown = new("UNKNOWN");

    public static readonly State11 Returned = new("RETURNED");

    public TResult Match<TResult>(Func<TResult> onCanceled,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onSucceeded,
        Func<TResult> onUnknown,
        Func<TResult> onReturned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Canceled => onCanceled(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Unknown => onUnknown(),
            _ when this == Returned => onReturned(),
            _ => otherwise(Value)
        };

    public void Match(Action onCanceled,
        Action onPending,
        Action onFailed,
        Action onSucceeded,
        Action onUnknown,
        Action onReturned,
        Action<string> otherwise)
    {
        if (this == Canceled) onCanceled();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Succeeded) onSucceeded();
        else if (this == Unknown) onUnknown();
        else if (this == Returned) onReturned();
        else otherwise(Value);
    }
}
