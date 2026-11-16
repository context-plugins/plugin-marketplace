using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// A code indicating why the <c>Payment Instrument</c> was disabled.
/// <para>
/// See <c>disabled_message</c> for possible error codes and their messages.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisabledCode1>))]
public sealed record DisabledCode1 : OpenStringEnum<DisabledCode1>
{
    private DisabledCode1(string value) : base(value)
    {
    }

    public static readonly DisabledCode1 InvalidBankAccountRoutingNumber = new("INVALID_BANK_ACCOUNT_ROUTING_NUMBER");

    public static readonly DisabledCode1 MicrodepositReturned = new("MICRODEPOSIT_RETURNED");

    public static readonly DisabledCode1 MicrodepositVerificationRequired = new("MICRODEPOSIT_VERIFICATION_REQUIRED");

    public static readonly DisabledCode1 MicrodepositVerificationAttemptsExceeded = new(
        "MICRODEPOSIT_VERIFICATION_ATTEMPTS_EXCEEDED");

    public static readonly DisabledCode1 MicrodepositVerificationExpired = new("MICRODEPOSIT_VERIFICATION_EXPIRED");

    public static readonly DisabledCode1 TotalMicrodepositAttemptsExceededAccountLocked = new(
        "TOTAL_MICRODEPOSIT_ATTEMPTS_EXCEEDED_ACCOUNT_LOCKED");

    public static readonly DisabledCode1 UserInitiated = new("USER_INITIATED");

    public TResult Match<TResult>(Func<TResult> onInvalidBankAccountRoutingNumber,
        Func<TResult> onMicrodepositReturned,
        Func<TResult> onMicrodepositVerificationRequired,
        Func<TResult> onMicrodepositVerificationAttemptsExceeded,
        Func<TResult> onMicrodepositVerificationExpired,
        Func<TResult> onTotalMicrodepositAttemptsExceededAccountLocked,
        Func<TResult> onUserInitiated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidBankAccountRoutingNumber => onInvalidBankAccountRoutingNumber(),
            _ when this == MicrodepositReturned => onMicrodepositReturned(),
            _ when this == MicrodepositVerificationRequired => onMicrodepositVerificationRequired(),
            _ when this == MicrodepositVerificationAttemptsExceeded => onMicrodepositVerificationAttemptsExceeded(),
            _ when this == MicrodepositVerificationExpired => onMicrodepositVerificationExpired(),
            _ when this ==
                TotalMicrodepositAttemptsExceededAccountLocked => onTotalMicrodepositAttemptsExceededAccountLocked(),
            _ when this == UserInitiated => onUserInitiated(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidBankAccountRoutingNumber,
        Action onMicrodepositReturned,
        Action onMicrodepositVerificationRequired,
        Action onMicrodepositVerificationAttemptsExceeded,
        Action onMicrodepositVerificationExpired,
        Action onTotalMicrodepositAttemptsExceededAccountLocked,
        Action onUserInitiated,
        Action<string> otherwise)
    {
        if (this == InvalidBankAccountRoutingNumber) onInvalidBankAccountRoutingNumber();
        else if (this == MicrodepositReturned) onMicrodepositReturned();
        else if (this == MicrodepositVerificationRequired) onMicrodepositVerificationRequired();
        else if (this == MicrodepositVerificationAttemptsExceeded) onMicrodepositVerificationAttemptsExceeded();
        else if (this == MicrodepositVerificationExpired) onMicrodepositVerificationExpired();
        else if (this ==
            TotalMicrodepositAttemptsExceededAccountLocked) onTotalMicrodepositAttemptsExceededAccountLocked();
        else if (this == UserInitiated) onUserInitiated();
        else otherwise(Value);
    }
}
