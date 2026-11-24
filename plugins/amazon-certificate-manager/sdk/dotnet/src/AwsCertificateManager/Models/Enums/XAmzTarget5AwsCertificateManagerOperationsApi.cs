using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget5AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget5AwsCertificateManagerOperationsApi>
{
    private XAmzTarget5AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AwsCertificateManagerOperationsApi CertificateManagerGetAcmeExternalAccountBindingCredentials = new(
        "CertificateManager.GetAcmeExternalAccountBindingCredentials");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerGetAcmeExternalAccountBindingCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerGetAcmeExternalAccountBindingCredentials => onCertificateManagerGetAcmeExternalAccountBindingCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerGetAcmeExternalAccountBindingCredentials, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerGetAcmeExternalAccountBindingCredentials) onCertificateManagerGetAcmeExternalAccountBindingCredentials();
        else otherwise(Value);
    }
}
