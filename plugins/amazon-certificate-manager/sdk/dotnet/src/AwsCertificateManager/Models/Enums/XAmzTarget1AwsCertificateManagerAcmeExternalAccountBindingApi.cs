using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi>))]
public sealed record XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi : OpenStringEnum<XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi>
{
    private XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi CertificateManagerDeleteAcmeExternalAccountBinding = new(
        "CertificateManager.DeleteAcmeExternalAccountBinding");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDeleteAcmeExternalAccountBinding,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerDeleteAcmeExternalAccountBinding => onCertificateManagerDeleteAcmeExternalAccountBinding(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDeleteAcmeExternalAccountBinding, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerDeleteAcmeExternalAccountBinding) onCertificateManagerDeleteAcmeExternalAccountBinding();
        else otherwise(Value);
    }
}
