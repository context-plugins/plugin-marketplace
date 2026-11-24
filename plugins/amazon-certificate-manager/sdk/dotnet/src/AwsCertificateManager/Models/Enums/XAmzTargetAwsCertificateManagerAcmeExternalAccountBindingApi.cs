using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi>))]
public sealed record XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi : OpenStringEnum<XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi>
{
    private XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi CertificateManagerCreateAcmeExternalAccountBinding = new(
        "CertificateManager.CreateAcmeExternalAccountBinding");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerCreateAcmeExternalAccountBinding,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerCreateAcmeExternalAccountBinding => onCertificateManagerCreateAcmeExternalAccountBinding(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerCreateAcmeExternalAccountBinding, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerCreateAcmeExternalAccountBinding) onCertificateManagerCreateAcmeExternalAccountBinding();
        else otherwise(Value);
    }
}
