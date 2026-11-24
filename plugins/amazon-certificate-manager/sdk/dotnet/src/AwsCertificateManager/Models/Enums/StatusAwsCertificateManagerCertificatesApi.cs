using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again. If validation succeeds, the certificate enters status ISSUED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsCertificateManagerCertificatesApi>))]
public sealed record StatusAwsCertificateManagerCertificatesApi : OpenStringEnum<StatusAwsCertificateManagerCertificatesApi>
{
    private StatusAwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsCertificateManagerCertificatesApi PendingValidation = new("PENDING_VALIDATION");

    public static readonly StatusAwsCertificateManagerCertificatesApi Issued = new("ISSUED");

    public static readonly StatusAwsCertificateManagerCertificatesApi Inactive = new("INACTIVE");

    public static readonly StatusAwsCertificateManagerCertificatesApi Expired = new("EXPIRED");

    public static readonly StatusAwsCertificateManagerCertificatesApi ValidationTimedOut = new("VALIDATION_TIMED_OUT");

    public static readonly StatusAwsCertificateManagerCertificatesApi Revoked = new("REVOKED");

    public static readonly StatusAwsCertificateManagerCertificatesApi Failed = new("FAILED");

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
