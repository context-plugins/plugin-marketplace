using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by certificate status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 PendingValidation = new("PENDING_VALIDATION");

    public static readonly Status1 Issued = new("ISSUED");

    public static readonly Status1 Inactive = new("INACTIVE");

    public static readonly Status1 Expired = new("EXPIRED");

    public static readonly Status1 ValidationTimedOut = new("VALIDATION_TIMED_OUT");

    public static readonly Status1 Revoked = new("REVOKED");

    public static readonly Status1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPendingValidation,
        Func<TResult> onIssued,
        Func<TResult> onInactive,
        Func<TResult> onExpired,
        Func<TResult> onValidationTimedOut,
        Func<TResult> onRevoked,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingValidation => onPendingValidation(),
            _ when this == Issued => onIssued(),
            _ when this == Inactive => onInactive(),
            _ when this == Expired => onExpired(),
            _ when this == ValidationTimedOut => onValidationTimedOut(),
            _ when this == Revoked => onRevoked(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingValidation,
        Action onIssued,
        Action onInactive,
        Action onExpired,
        Action onValidationTimedOut,
        Action onRevoked,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == PendingValidation) onPendingValidation();
        else if (this == Issued) onIssued();
        else if (this == Inactive) onInactive();
        else if (this == Expired) onExpired();
        else if (this == ValidationTimedOut) onValidationTimedOut();
        else if (this == Revoked) onRevoked();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
