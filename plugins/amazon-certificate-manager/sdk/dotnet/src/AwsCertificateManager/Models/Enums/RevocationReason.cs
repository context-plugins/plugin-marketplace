using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The reason the certificate was revoked. This value exists only when the certificate status is REVOKED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RevocationReason>))]
public sealed record RevocationReason : OpenStringEnum<RevocationReason>
{
    private RevocationReason(string value) : base(value)
    {
    }

    public static readonly RevocationReason Unspecified = new("UNSPECIFIED");

    public static readonly RevocationReason KeyCompromise = new("KEY_COMPROMISE");

    public static readonly RevocationReason CaCompromise = new("CA_COMPROMISE");

    public static readonly RevocationReason AffiliationChanged = new("AFFILIATION_CHANGED");

    public static readonly RevocationReason Superceded = new("SUPERCEDED");

    public static readonly RevocationReason Superseded = new("SUPERSEDED");

    public static readonly RevocationReason CessationOfOperation = new("CESSATION_OF_OPERATION");

    public static readonly RevocationReason CertificateHold = new("CERTIFICATE_HOLD");

    public static readonly RevocationReason RemoveFromCrl = new("REMOVE_FROM_CRL");

    public static readonly RevocationReason PrivilegeWithdrawn = new("PRIVILEGE_WITHDRAWN");

    public static readonly RevocationReason AaCompromise = new("A_A_COMPROMISE");

    public TResult Match<TResult>(Func<TResult> onUnspecified,
        Func<TResult> onKeyCompromise,
        Func<TResult> onCaCompromise,
        Func<TResult> onAffiliationChanged,
        Func<TResult> onSuperceded,
        Func<TResult> onSuperseded,
        Func<TResult> onCessationOfOperation,
        Func<TResult> onCertificateHold,
        Func<TResult> onRemoveFromCrl,
        Func<TResult> onPrivilegeWithdrawn,
        Func<TResult> onAaCompromise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unspecified => onUnspecified(),
            _ when this == KeyCompromise => onKeyCompromise(),
            _ when this == CaCompromise => onCaCompromise(),
            _ when this == AffiliationChanged => onAffiliationChanged(),
            _ when this == Superceded => onSuperceded(),
            _ when this == Superseded => onSuperseded(),
            _ when this == CessationOfOperation => onCessationOfOperation(),
            _ when this == CertificateHold => onCertificateHold(),
            _ when this == RemoveFromCrl => onRemoveFromCrl(),
            _ when this == PrivilegeWithdrawn => onPrivilegeWithdrawn(),
            _ when this == AaCompromise => onAaCompromise(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnspecified,
        Action onKeyCompromise,
        Action onCaCompromise,
        Action onAffiliationChanged,
        Action onSuperceded,
        Action onSuperseded,
        Action onCessationOfOperation,
        Action onCertificateHold,
        Action onRemoveFromCrl,
        Action onPrivilegeWithdrawn,
        Action onAaCompromise,
        Action<string> otherwise)
    {
        if (this == Unspecified) onUnspecified();
        else if (this == KeyCompromise) onKeyCompromise();
        else if (this == CaCompromise) onCaCompromise();
        else if (this == AffiliationChanged) onAffiliationChanged();
        else if (this == Superceded) onSuperceded();
        else if (this == Superseded) onSuperseded();
        else if (this == CessationOfOperation) onCessationOfOperation();
        else if (this == CertificateHold) onCertificateHold();
        else if (this == RemoveFromCrl) onRemoveFromCrl();
        else if (this == PrivilegeWithdrawn) onPrivilegeWithdrawn();
        else if (this == AaCompromise) onAaCompromise();
        else otherwise(Value);
    }
}
