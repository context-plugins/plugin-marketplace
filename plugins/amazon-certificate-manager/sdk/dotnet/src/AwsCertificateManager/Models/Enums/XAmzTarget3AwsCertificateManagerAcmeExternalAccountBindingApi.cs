using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi>))]
public sealed record XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi : OpenStringEnum<XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi>
{
    private XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi CertificateManagerListAcmeExternalAccountBindings = new(
        "CertificateManager.ListAcmeExternalAccountBindings");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListAcmeExternalAccountBindings,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerListAcmeExternalAccountBindings => onCertificateManagerListAcmeExternalAccountBindings(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListAcmeExternalAccountBindings, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerListAcmeExternalAccountBindings) onCertificateManagerListAcmeExternalAccountBindings();
        else otherwise(Value);
    }
}
