using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi>))]
public sealed record XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi : OpenStringEnum<XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi>
{
    private XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi CertificateManagerDeleteAcmeDomainValidation = new(
        "CertificateManager.DeleteAcmeDomainValidation");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDeleteAcmeDomainValidation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerDeleteAcmeDomainValidation => onCertificateManagerDeleteAcmeDomainValidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDeleteAcmeDomainValidation, Action<string> otherwise)
    {
        if (this == CertificateManagerDeleteAcmeDomainValidation) onCertificateManagerDeleteAcmeDomainValidation();
        else otherwise(Value);
    }
}
