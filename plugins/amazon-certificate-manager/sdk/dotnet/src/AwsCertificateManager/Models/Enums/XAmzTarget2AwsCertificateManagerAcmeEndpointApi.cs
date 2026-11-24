using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerAcmeEndpointApi>))]
public sealed record XAmzTarget2AwsCertificateManagerAcmeEndpointApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerAcmeEndpointApi>
{
    private XAmzTarget2AwsCertificateManagerAcmeEndpointApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerAcmeEndpointApi CertificateManagerDescribeAcmeEndpoint = new(
        "CertificateManager.DescribeAcmeEndpoint");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDescribeAcmeEndpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerDescribeAcmeEndpoint => onCertificateManagerDescribeAcmeEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDescribeAcmeEndpoint, Action<string> otherwise)
    {
        if (this == CertificateManagerDescribeAcmeEndpoint) onCertificateManagerDescribeAcmeEndpoint();
        else otherwise(Value);
    }
}
