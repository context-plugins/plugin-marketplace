using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DocumentType>))]
public sealed record DocumentType : OpenStringEnum<DocumentType>
{
    private DocumentType(string value) : base(value)
    {
    }

    public static readonly DocumentType BusinessProofUrl = new("business_proof_url");

    public static readonly DocumentType GstCertificate = new("gst_certificate");

    public static readonly DocumentType ShopEstablishmentCertificate = new("shop_establishment_certificate");

    public static readonly DocumentType CertificateOfIncorporation = new("certificate_of_incorporation");

    public static readonly DocumentType TrustDeed = new("trust_deed");

    public static readonly DocumentType SocietyRegistrationCertificate = new("society_registration_certificate");

    public TResult Match<TResult>(Func<TResult> onBusinessProofUrl,
        Func<TResult> onGstCertificate,
        Func<TResult> onShopEstablishmentCertificate,
        Func<TResult> onCertificateOfIncorporation,
        Func<TResult> onTrustDeed,
        Func<TResult> onSocietyRegistrationCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BusinessProofUrl => onBusinessProofUrl(),
            _ when this == GstCertificate => onGstCertificate(),
            _ when this == ShopEstablishmentCertificate => onShopEstablishmentCertificate(),
            _ when this == CertificateOfIncorporation => onCertificateOfIncorporation(),
            _ when this == TrustDeed => onTrustDeed(),
            _ when this == SocietyRegistrationCertificate => onSocietyRegistrationCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusinessProofUrl,
        Action onGstCertificate,
        Action onShopEstablishmentCertificate,
        Action onCertificateOfIncorporation,
        Action onTrustDeed,
        Action onSocietyRegistrationCertificate,
        Action<string> otherwise)
    {
        if (this == BusinessProofUrl) onBusinessProofUrl();
        else if (this == GstCertificate) onGstCertificate();
        else if (this == ShopEstablishmentCertificate) onShopEstablishmentCertificate();
        else if (this == CertificateOfIncorporation) onCertificateOfIncorporation();
        else if (this == TrustDeed) onTrustDeed();
        else if (this == SocietyRegistrationCertificate) onSocietyRegistrationCertificate();
        else otherwise(Value);
    }
}
