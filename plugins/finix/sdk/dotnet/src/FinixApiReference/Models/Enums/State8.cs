using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the Microdeposit.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State8>))]
public sealed record State8 : OpenStringEnum<State8>
{
    private State8(string value) : base(value)
    {
    }

    public static readonly State8 Pending = new("PENDING");

    public static readonly State8 Verified = new("VERIFIED");

    public static readonly State8 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onVerified,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Verified => onVerified(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onVerified, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Verified) onVerified();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
