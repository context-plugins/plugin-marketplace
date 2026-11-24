using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi>))]
public sealed record XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi : OpenStringEnum<XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi>
{
    private XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi CertificateManagerRevokeAcmeExternalAccountBinding = new(
        "CertificateManager.RevokeAcmeExternalAccountBinding");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRevokeAcmeExternalAccountBinding,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerRevokeAcmeExternalAccountBinding => onCertificateManagerRevokeAcmeExternalAccountBinding(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRevokeAcmeExternalAccountBinding, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerRevokeAcmeExternalAccountBinding) onCertificateManagerRevokeAcmeExternalAccountBinding();
        else otherwise(Value);
    }
}
