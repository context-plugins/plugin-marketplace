using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCertificateManagerCertificatesApi>))]
public sealed record XAmzTarget3AwsCertificateManagerCertificatesApi : OpenStringEnum<XAmzTarget3AwsCertificateManagerCertificatesApi>
{
    private XAmzTarget3AwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCertificateManagerCertificatesApi CertificateManagerGetCertificate = new(
        "CertificateManager.GetCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerGetCertificate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerGetCertificate => onCertificateManagerGetCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerGetCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerGetCertificate) onCertificateManagerGetCertificate();
        else otherwise(Value);
    }
}
