using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 CertificateManagerSearchCertificates = new(
        "CertificateManager.SearchCertificates");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerSearchCertificates,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerSearchCertificates => onCertificateManagerSearchCertificates(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerSearchCertificates, Action<string> otherwise)
    {
        if (this == CertificateManagerSearchCertificates) onCertificateManagerSearchCertificates();
        else otherwise(Value);
    }
}
