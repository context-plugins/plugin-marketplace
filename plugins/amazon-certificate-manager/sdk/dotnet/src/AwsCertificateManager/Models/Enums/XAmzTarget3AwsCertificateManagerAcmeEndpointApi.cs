using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCertificateManagerAcmeEndpointApi>))]
public sealed record XAmzTarget3AwsCertificateManagerAcmeEndpointApi : OpenStringEnum<XAmzTarget3AwsCertificateManagerAcmeEndpointApi>
{
    private XAmzTarget3AwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCertificateManagerAcmeEndpointApi CertificateManagerListAcmeEndpoints = new(
        "CertificateManager.ListAcmeEndpoints");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListAcmeEndpoints,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerListAcmeEndpoints => onCertificateManagerListAcmeEndpoints(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListAcmeEndpoints, Action<string> otherwise)
    {
        if (this == CertificateManagerListAcmeEndpoints) onCertificateManagerListAcmeEndpoints();
        else otherwise(Value);
    }
}
