using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details why the verification failed. Returns <c>null</c> unless <c>state</c> is <c>FAILED</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FailureCode2>))]
public sealed record FailureCode2 : OpenStringEnum<FailureCode2>
{
    private FailureCode2(string value) : base(value)
    {
    }

    public static readonly FailureCode2 InvalidBankAccountRoutingNumber = new("INVALID_BANK_ACCOUNT_ROUTING_NUMBER");

    public static readonly FailureCode2 MicrodepositReturned = new("MICRODEPOSIT_RETURNED");

    public static readonly FailureCode2 MicrodepositVerificationAttemptsExceeded = new(
        "MICRODEPOSIT_VERIFICATION_ATTEMPTS_EXCEEDED");

    public static readonly FailureCode2 MicrodepositVerificationExpired = new("MICRODEPOSIT_VERIFICATION_EXPIRED");

    public static readonly FailureCode2 TotalMicrodepositAttemptsExceededAccountLocked = new(
        "TOTAL_MICRODEPOSIT_ATTEMPTS_EXCEEDED_ACCOUNT_LOCKED");

    public TResult Match<TResult>(Func<TResult> onInvalidBankAccountRoutingNumber,
        Func<TResult> onMicrodepositReturned,
        Func<TResult> onMicrodepositVerificationAttemptsExceeded,
        Func<TResult> onMicrodepositVerificationExpired,
        Func<TResult> onTotalMicrodepositAttemptsExceededAccountLocked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidBankAccountRoutingNumber => onInvalidBankAccountRoutingNumber(),
            _ when this == MicrodepositReturned => onMicrodepositReturned(),
            _ when this == MicrodepositVerificationAttemptsExceeded => onMicrodepositVerificationAttemptsExceeded(),
            _ when this == MicrodepositVerificationExpired => onMicrodepositVerificationExpired(),
            _ when this ==
                TotalMicrodepositAttemptsExceededAccountLocked => onTotalMicrodepositAttemptsExceededAccountLocked(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidBankAccountRoutingNumber,
        Action onMicrodepositReturned,
        Action onMicrodepositVerificationAttemptsExceeded,
        Action onMicrodepositVerificationExpired,
        Action onTotalMicrodepositAttemptsExceededAccountLocked,
        Action<string> otherwise)
    {
        if (this == InvalidBankAccountRoutingNumber) onInvalidBankAccountRoutingNumber();
        else if (this == MicrodepositReturned) onMicrodepositReturned();
        else if (this == MicrodepositVerificationAttemptsExceeded) onMicrodepositVerificationAttemptsExceeded();
        else if (this == MicrodepositVerificationExpired) onMicrodepositVerificationExpired();
        else if (this ==
            TotalMicrodepositAttemptsExceededAccountLocked) onTotalMicrodepositAttemptsExceededAccountLocked();
        else otherwise(Value);
    }
}
