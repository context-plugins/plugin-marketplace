using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 CertificateManagerListAcmeDomainValidations = new(
        "CertificateManager.ListAcmeDomainValidations");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListAcmeDomainValidations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerListAcmeDomainValidations => onCertificateManagerListAcmeDomainValidations(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListAcmeDomainValidations, Action<string> otherwise)
    {
        if (this == CertificateManagerListAcmeDomainValidations) onCertificateManagerListAcmeDomainValidations();
        else otherwise(Value);
    }
}
