using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the <c>Authorization</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Canceled = new("CANCELED");

    public static readonly State1 Pending = new("PENDING");

    public static readonly State1 Failed = new("FAILED");

    public static readonly State1 Succeeded = new("SUCCEEDED");

    public static readonly State1 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onCanceled,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onSucceeded,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Canceled => onCanceled(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onCanceled,
        Action onPending,
        Action onFailed,
        Action onSucceeded,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Canceled) onCanceled();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Succeeded) onSucceeded();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
