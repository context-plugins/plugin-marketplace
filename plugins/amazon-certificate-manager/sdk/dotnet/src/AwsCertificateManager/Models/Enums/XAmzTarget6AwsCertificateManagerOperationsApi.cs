using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget6AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget6AwsCertificateManagerOperationsApi>
{
    private XAmzTarget6AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6AwsCertificateManagerOperationsApi CertificateManagerListCertificateDomainValidations = new(
        "CertificateManager.ListCertificateDomainValidations");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListCertificateDomainValidations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerListCertificateDomainValidations => onCertificateManagerListCertificateDomainValidations(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListCertificateDomainValidations, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerListCertificateDomainValidations) onCertificateManagerListCertificateDomainValidations();
        else otherwise(Value);
    }
}
