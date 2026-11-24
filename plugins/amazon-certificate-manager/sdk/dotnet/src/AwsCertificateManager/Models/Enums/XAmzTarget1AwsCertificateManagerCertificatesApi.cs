using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCertificateManagerCertificatesApi>))]
public sealed record XAmzTarget1AwsCertificateManagerCertificatesApi : OpenStringEnum<XAmzTarget1AwsCertificateManagerCertificatesApi>
{
    private XAmzTarget1AwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCertificateManagerCertificatesApi CertificateManagerDescribeCertificate = new(
        "CertificateManager.DescribeCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDescribeCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerDescribeCertificate => onCertificateManagerDescribeCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDescribeCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerDescribeCertificate) onCertificateManagerDescribeCertificate();
        else otherwise(Value);
    }
}
