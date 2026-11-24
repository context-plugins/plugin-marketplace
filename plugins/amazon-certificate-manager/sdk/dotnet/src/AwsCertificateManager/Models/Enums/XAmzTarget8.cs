using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 CertificateManagerRequestCertificate = new(
        "CertificateManager.RequestCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRequestCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerRequestCertificate => onCertificateManagerRequestCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRequestCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerRequestCertificate) onCertificateManagerRequestCertificate();
        else otherwise(Value);
    }
}
