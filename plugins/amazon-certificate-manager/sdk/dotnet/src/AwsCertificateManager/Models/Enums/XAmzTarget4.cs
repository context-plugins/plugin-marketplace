using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 CertificateManagerUpdateAcmeDomainValidation = new(
        "CertificateManager.UpdateAcmeDomainValidation");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerUpdateAcmeDomainValidation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerUpdateAcmeDomainValidation => onCertificateManagerUpdateAcmeDomainValidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerUpdateAcmeDomainValidation, Action<string> otherwise)
    {
        if (this == CertificateManagerUpdateAcmeDomainValidation) onCertificateManagerUpdateAcmeDomainValidation();
        else otherwise(Value);
    }
}
