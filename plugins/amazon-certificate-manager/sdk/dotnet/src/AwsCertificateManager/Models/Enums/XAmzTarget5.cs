using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 CertificateManagerListCertificates = new("CertificateManager.ListCertificates");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListCertificates,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerListCertificates => onCertificateManagerListCertificates(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListCertificates, Action<string> otherwise)
    {
        if (this == CertificateManagerListCertificates) onCertificateManagerListCertificates();
        else otherwise(Value);
    }
}
