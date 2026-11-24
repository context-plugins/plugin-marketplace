using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS, RENEWAL_STATUS, EXPORTED, IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN, COMMON_NAME, REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT, MANAGED_BY, EXPORT_OPTION, VALIDATION_METHOD, and IMPORTED_AT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy1>))]
public sealed record SortBy1 : OpenStringEnum<SortBy1>
{
    private SortBy1(string value) : base(value)
    {
    }

    public static readonly SortBy1 CreatedAt = new("CREATED_AT");

    public static readonly SortBy1 NotAfter = new("NOT_AFTER");

    public static readonly SortBy1 Status = new("STATUS");

    public static readonly SortBy1 RenewalStatus = new("RENEWAL_STATUS");

    public static readonly SortBy1 Exported = new("EXPORTED");

    public static readonly SortBy1 InUse = new("IN_USE");

    public static readonly SortBy1 NotBefore = new("NOT_BEFORE");

    public static readonly SortBy1 KeyAlgorithm = new("KEY_ALGORITHM");

    public static readonly SortBy1 Type = new("TYPE");

    public static readonly SortBy1 CertificateArn = new("CERTIFICATE_ARN");

    public static readonly SortBy1 CommonName = new("COMMON_NAME");

    public static readonly SortBy1 RevokedAt = new("REVOKED_AT");

    public static readonly SortBy1 RenewalEligibility = new("RENEWAL_ELIGIBILITY");

    public static readonly SortBy1 IssuedAt = new("ISSUED_AT");

    public static readonly SortBy1 ManagedBy = new("MANAGED_BY");

    public static readonly SortBy1 ExportOption = new("EXPORT_OPTION");

    public static readonly SortBy1 ValidationMethod = new("VALIDATION_METHOD");

    public static readonly SortBy1 ImportedAt = new("IMPORTED_AT");

    public static readonly SortBy1 AcmeEndpointArn = new("ACME_ENDPOINT_ARN");

    public static readonly SortBy1 AcmeAccountId = new("ACME_ACCOUNT_ID");

    public static readonly SortBy1 CertificateKeyPairOrigin = new("CERTIFICATE_KEY_PAIR_ORIGIN");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onNotAfter,
        Func<TResult> onStatus,
        Func<TResult> onRenewalStatus,
        Func<TResult> onExported,
        Func<TResult> onInUse,
        Func<TResult> onNotBefore,
        Func<TResult> onKeyAlgorithm,
        Func<TResult> onType,
        Func<TResult> onCertificateArn,
        Func<TResult> onCommonName,
        Func<TResult> onRevokedAt,
        Func<TResult> onRenewalEligibility,
        Func<TResult> onIssuedAt,
        Func<TResult> onManagedBy,
        Func<TResult> onExportOption,
        Func<TResult> onValidationMethod,
        Func<TResult> onImportedAt,
        Func<TResult> onAcmeEndpointArn,
        Func<TResult> onAcmeAccountId,
        Func<TResult> onCertificateKeyPairOrigin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == NotAfter => onNotAfter(),
            _ when this == Status => onStatus(),
            _ when this == RenewalStatus => onRenewalStatus(),
            _ when this == Exported => onExported(),
            _ when this == InUse => onInUse(),
            _ when this == NotBefore => onNotBefore(),
            _ when this == KeyAlgorithm => onKeyAlgorithm(),
            _ when this == Type => onType(),
            _ when this == CertificateArn => onCertificateArn(),
            _ when this == CommonName => onCommonName(),
            _ when this == RevokedAt => onRevokedAt(),
            _ when this == RenewalEligibility => onRenewalEligibility(),
            _ when this == IssuedAt => onIssuedAt(),
            _ when this == ManagedBy => onManagedBy(),
            _ when this == ExportOption => onExportOption(),
            _ when this == ValidationMethod => onValidationMethod(),
            _ when this == ImportedAt => onImportedAt(),
            _ when this == AcmeEndpointArn => onAcmeEndpointArn(),
            _ when this == AcmeAccountId => onAcmeAccountId(),
            _ when this == CertificateKeyPairOrigin => onCertificateKeyPairOrigin(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt,
        Action onNotAfter,
        Action onStatus,
        Action onRenewalStatus,
        Action onExported,
        Action onInUse,
        Action onNotBefore,
        Action onKeyAlgorithm,
        Action onType,
        Action onCertificateArn,
        Action onCommonName,
        Action onRevokedAt,
        Action onRenewalEligibility,
        Action onIssuedAt,
        Action onManagedBy,
        Action onExportOption,
        Action onValidationMethod,
        Action onImportedAt,
        Action onAcmeEndpointArn,
        Action onAcmeAccountId,
        Action onCertificateKeyPairOrigin,
        Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == NotAfter) onNotAfter();
        else if (this == Status) onStatus();
        else if (this == RenewalStatus) onRenewalStatus();
        else if (this == Exported) onExported();
        else if (this == InUse) onInUse();
        else if (this == NotBefore) onNotBefore();
        else if (this == KeyAlgorithm) onKeyAlgorithm();
        else if (this == Type) onType();
        else if (this == CertificateArn) onCertificateArn();
        else if (this == CommonName) onCommonName();
        else if (this == RevokedAt) onRevokedAt();
        else if (this == RenewalEligibility) onRenewalEligibility();
        else if (this == IssuedAt) onIssuedAt();
        else if (this == ManagedBy) onManagedBy();
        else if (this == ExportOption) onExportOption();
        else if (this == ValidationMethod) onValidationMethod();
        else if (this == ImportedAt) onImportedAt();
        else if (this == AcmeEndpointArn) onAcmeEndpointArn();
        else if (this == AcmeAccountId) onAcmeAccountId();
        else if (this == CertificateKeyPairOrigin) onCertificateKeyPairOrigin();
        else otherwise(Value);
    }
}
