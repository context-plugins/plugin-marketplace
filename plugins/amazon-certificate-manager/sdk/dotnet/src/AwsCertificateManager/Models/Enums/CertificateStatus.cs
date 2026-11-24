using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CertificateStatus>))]
public sealed record CertificateStatus : OpenStringEnum<CertificateStatus>
{
    private CertificateStatus(string value) : base(value)
    {
    }

    public static readonly CertificateStatus PendingValidation = new("PENDING_VALIDATION");

    public static readonly CertificateStatus Issued = new("ISSUED");

    public static readonly CertificateStatus Inactive = new("INACTIVE");

    public static readonly CertificateStatus Expired = new("EXPIRED");

    public static readonly CertificateStatus ValidationTimedOut = new("VALIDATION_TIMED_OUT");

    public static readonly CertificateStatus Revoked = new("REVOKED");

    public static readonly CertificateStatus Failed = new("FAILED");

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
