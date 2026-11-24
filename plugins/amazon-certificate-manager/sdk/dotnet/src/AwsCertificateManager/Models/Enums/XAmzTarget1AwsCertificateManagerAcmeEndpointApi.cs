using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCertificateManagerAcmeEndpointApi>))]
public sealed record XAmzTarget1AwsCertificateManagerAcmeEndpointApi : OpenStringEnum<XAmzTarget1AwsCertificateManagerAcmeEndpointApi>
{
    private XAmzTarget1AwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCertificateManagerAcmeEndpointApi CertificateManagerDeleteAcmeEndpoint = new(
        "CertificateManager.DeleteAcmeEndpoint");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDeleteAcmeEndpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerDeleteAcmeEndpoint => onCertificateManagerDeleteAcmeEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDeleteAcmeEndpoint, Action<string> otherwise)
    {
        if (this == CertificateManagerDeleteAcmeEndpoint) onCertificateManagerDeleteAcmeEndpoint();
        else otherwise(Value);
    }
}
