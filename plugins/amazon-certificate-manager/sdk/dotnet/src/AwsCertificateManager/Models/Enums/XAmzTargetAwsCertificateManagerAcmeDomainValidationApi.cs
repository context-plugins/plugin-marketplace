using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerAcmeDomainValidationApi>))]
public sealed record XAmzTargetAwsCertificateManagerAcmeDomainValidationApi : OpenStringEnum<XAmzTargetAwsCertificateManagerAcmeDomainValidationApi>
{
    private XAmzTargetAwsCertificateManagerAcmeDomainValidationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerAcmeDomainValidationApi CertificateManagerCreateAcmeDomainValidation = new(
        "CertificateManager.CreateAcmeDomainValidation");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerCreateAcmeDomainValidation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerCreateAcmeDomainValidation => onCertificateManagerCreateAcmeDomainValidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerCreateAcmeDomainValidation, Action<string> otherwise)
    {
        if (this == CertificateManagerCreateAcmeDomainValidation) onCertificateManagerCreateAcmeDomainValidation();
        else otherwise(Value);
    }
}
