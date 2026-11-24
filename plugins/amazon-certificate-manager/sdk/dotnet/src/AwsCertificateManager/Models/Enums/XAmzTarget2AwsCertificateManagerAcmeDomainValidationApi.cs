using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi>))]
public sealed record XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi>
{
    private XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi CertificateManagerDescribeAcmeDomainValidation = new(
        "CertificateManager.DescribeAcmeDomainValidation");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDescribeAcmeDomainValidation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerDescribeAcmeDomainValidation => onCertificateManagerDescribeAcmeDomainValidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDescribeAcmeDomainValidation, Action<string> otherwise)
    {
        if (this == CertificateManagerDescribeAcmeDomainValidation) onCertificateManagerDescribeAcmeDomainValidation();
        else otherwise(Value);
    }
}
