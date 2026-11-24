using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 CertificateManagerRevokeCertificate = new(
        "CertificateManager.RevokeCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRevokeCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerRevokeCertificate => onCertificateManagerRevokeCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRevokeCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerRevokeCertificate) onCertificateManagerRevokeCertificate();
        else otherwise(Value);
    }
}
