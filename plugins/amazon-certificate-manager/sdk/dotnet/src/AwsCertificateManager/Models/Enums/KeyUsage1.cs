using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by key usage.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KeyUsage1>))]
public sealed record KeyUsage1 : OpenStringEnum<KeyUsage1>
{
    private KeyUsage1(string value) : base(value)
    {
    }

    public static readonly KeyUsage1 DigitalSignature = new("DIGITAL_SIGNATURE");

    public static readonly KeyUsage1 NonRepudiation = new("NON_REPUDIATION");

    public static readonly KeyUsage1 KeyEncipherment = new("KEY_ENCIPHERMENT");

    public static readonly KeyUsage1 DataEncipherment = new("DATA_ENCIPHERMENT");

    public static readonly KeyUsage1 KeyAgreement = new("KEY_AGREEMENT");

    public static readonly KeyUsage1 CertificateSigning = new("CERTIFICATE_SIGNING");

    public static readonly KeyUsage1 CrlSigning = new("CRL_SIGNING");

    public static readonly KeyUsage1 EncipherOnly = new("ENCIPHER_ONLY");

    public static readonly KeyUsage1 DecipherOnly = new("DECIPHER_ONLY");

    public static readonly KeyUsage1 Any = new("ANY");

    public static readonly KeyUsage1 Custom = new("CUSTOM");

    public TResult Match<TResult>(Func<TResult> onDigitalSignature,
        Func<TResult> onNonRepudiation,
        Func<TResult> onKeyEncipherment,
        Func<TResult> onDataEncipherment,
        Func<TResult> onKeyAgreement,
        Func<TResult> onCertificateSigning,
        Func<TResult> onCrlSigning,
        Func<TResult> onEncipherOnly,
        Func<TResult> onDecipherOnly,
        Func<TResult> onAny,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DigitalSignature => onDigitalSignature(),
            _ when this == NonRepudiation => onNonRepudiation(),
            _ when this == KeyEncipherment => onKeyEncipherment(),
            _ when this == DataEncipherment => onDataEncipherment(),
            _ when this == KeyAgreement => onKeyAgreement(),
            _ when this == CertificateSigning => onCertificateSigning(),
            _ when this == CrlSigning => onCrlSigning(),
            _ when this == EncipherOnly => onEncipherOnly(),
            _ when this == DecipherOnly => onDecipherOnly(),
            _ when this == Any => onAny(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onDigitalSignature,
        Action onNonRepudiation,
        Action onKeyEncipherment,
        Action onDataEncipherment,
        Action onKeyAgreement,
        Action onCertificateSigning,
        Action onCrlSigning,
        Action onEncipherOnly,
        Action onDecipherOnly,
        Action onAny,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == DigitalSignature) onDigitalSignature();
        else if (this == NonRepudiation) onNonRepudiation();
        else if (this == KeyEncipherment) onKeyEncipherment();
        else if (this == DataEncipherment) onDataEncipherment();
        else if (this == KeyAgreement) onKeyAgreement();
        else if (this == CertificateSigning) onCertificateSigning();
        else if (this == CrlSigning) onCrlSigning();
        else if (this == EncipherOnly) onEncipherOnly();
        else if (this == DecipherOnly) onDecipherOnly();
        else if (this == Any) onAny();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
