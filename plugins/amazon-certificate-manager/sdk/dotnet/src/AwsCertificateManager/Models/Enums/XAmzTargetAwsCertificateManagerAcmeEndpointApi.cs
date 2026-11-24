using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerAcmeEndpointApi>))]
public sealed record XAmzTargetAwsCertificateManagerAcmeEndpointApi : OpenStringEnum<XAmzTargetAwsCertificateManagerAcmeEndpointApi>
{
    private XAmzTargetAwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerAcmeEndpointApi CertificateManagerCreateAcmeEndpoint = new(
        "CertificateManager.CreateAcmeEndpoint");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerCreateAcmeEndpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerCreateAcmeEndpoint => onCertificateManagerCreateAcmeEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerCreateAcmeEndpoint, Action<string> otherwise)
    {
        if (this == CertificateManagerCreateAcmeEndpoint) onCertificateManagerCreateAcmeEndpoint();
        else otherwise(Value);
    }
}
