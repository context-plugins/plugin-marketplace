using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCertificateManagerAcmeEndpointApi>))]
public sealed record XAmzTarget4AwsCertificateManagerAcmeEndpointApi : OpenStringEnum<XAmzTarget4AwsCertificateManagerAcmeEndpointApi>
{
    private XAmzTarget4AwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCertificateManagerAcmeEndpointApi CertificateManagerUpdateAcmeEndpoint = new(
        "CertificateManager.UpdateAcmeEndpoint");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerUpdateAcmeEndpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerUpdateAcmeEndpoint => onCertificateManagerUpdateAcmeEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerUpdateAcmeEndpoint, Action<string> otherwise)
    {
        if (this == CertificateManagerUpdateAcmeEndpoint) onCertificateManagerUpdateAcmeEndpoint();
        else otherwise(Value);
    }
}
