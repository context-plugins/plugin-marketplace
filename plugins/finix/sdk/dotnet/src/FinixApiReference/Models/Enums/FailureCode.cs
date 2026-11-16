using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The code for why the authentication process could not finish. This field is populated when <c>state</c> is <c>FAILED</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FailureCode>))]
public sealed record FailureCode : OpenStringEnum<FailureCode>
{
    private FailureCode(string value) : base(value)
    {
    }

    public static readonly FailureCode AuthenticationFailed = new("AUTHENTICATION_FAILED");

    public static readonly FailureCode AuthenticationTimedOut = new("AUTHENTICATION_TIMED_OUT");

    public static readonly FailureCode CardNotEnrolled = new("CARD_NOT_ENROLLED");

    public static readonly FailureCode ChallengeRequired = new("CHALLENGE_REQUIRED");

    public static readonly FailureCode DirectoryServerUnavailable = new("DIRECTORY_SERVER_UNAVAILABLE");

    public static readonly FailureCode IssuerServerUnavailable = new("ISSUER_SERVER_UNAVAILABLE");

    public static readonly FailureCode ProtocolError = new("PROTOCOL_ERROR");

    public static readonly FailureCode SuspectedFraud = new("SUSPECTED_FRAUD");

    public static readonly FailureCode TransactionCancelledByCardholder = new("TRANSACTION_CANCELLED_BY_CARDHOLDER");

    public static readonly FailureCode TransactionNotPermitted = new("TRANSACTION_NOT_PERMITTED");

    public static readonly FailureCode TransientSystemFailure = new("TRANSIENT_SYSTEM_FAILURE");

    public static readonly FailureCode Unsupported3DSecureVersion = new("UNSUPPORTED_3D_SECURE_VERSION");

    public TResult Match<TResult>(Func<TResult> onAuthenticationFailed,
        Func<TResult> onAuthenticationTimedOut,
        Func<TResult> onCardNotEnrolled,
        Func<TResult> onChallengeRequired,
        Func<TResult> onDirectoryServerUnavailable,
        Func<TResult> onIssuerServerUnavailable,
        Func<TResult> onProtocolError,
        Func<TResult> onSuspectedFraud,
        Func<TResult> onTransactionCancelledByCardholder,
        Func<TResult> onTransactionNotPermitted,
        Func<TResult> onTransientSystemFailure,
        Func<TResult> onUnsupported3DSecureVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthenticationFailed => onAuthenticationFailed(),
            _ when this == AuthenticationTimedOut => onAuthenticationTimedOut(),
            _ when this == CardNotEnrolled => onCardNotEnrolled(),
            _ when this == ChallengeRequired => onChallengeRequired(),
            _ when this == DirectoryServerUnavailable => onDirectoryServerUnavailable(),
            _ when this == IssuerServerUnavailable => onIssuerServerUnavailable(),
            _ when this == ProtocolError => onProtocolError(),
            _ when this == SuspectedFraud => onSuspectedFraud(),
            _ when this == TransactionCancelledByCardholder => onTransactionCancelledByCardholder(),
            _ when this == TransactionNotPermitted => onTransactionNotPermitted(),
            _ when this == TransientSystemFailure => onTransientSystemFailure(),
            _ when this == Unsupported3DSecureVersion => onUnsupported3DSecureVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthenticationFailed,
        Action onAuthenticationTimedOut,
        Action onCardNotEnrolled,
        Action onChallengeRequired,
        Action onDirectoryServerUnavailable,
        Action onIssuerServerUnavailable,
        Action onProtocolError,
        Action onSuspectedFraud,
        Action onTransactionCancelledByCardholder,
        Action onTransactionNotPermitted,
        Action onTransientSystemFailure,
        Action onUnsupported3DSecureVersion,
        Action<string> otherwise)
    {
        if (this == AuthenticationFailed) onAuthenticationFailed();
        else if (this == AuthenticationTimedOut) onAuthenticationTimedOut();
        else if (this == CardNotEnrolled) onCardNotEnrolled();
        else if (this == ChallengeRequired) onChallengeRequired();
        else if (this == DirectoryServerUnavailable) onDirectoryServerUnavailable();
        else if (this == IssuerServerUnavailable) onIssuerServerUnavailable();
        else if (this == ProtocolError) onProtocolError();
        else if (this == SuspectedFraud) onSuspectedFraud();
        else if (this == TransactionCancelledByCardholder) onTransactionCancelledByCardholder();
        else if (this == TransactionNotPermitted) onTransactionNotPermitted();
        else if (this == TransientSystemFailure) onTransientSystemFailure();
        else if (this == Unsupported3DSecureVersion) onUnsupported3DSecureVersion();
        else otherwise(Value);
    }
}
