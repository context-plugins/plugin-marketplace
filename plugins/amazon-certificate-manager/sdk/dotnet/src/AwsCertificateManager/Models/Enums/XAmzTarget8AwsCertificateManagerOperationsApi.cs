using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget8AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget8AwsCertificateManagerOperationsApi>
{
    private XAmzTarget8AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8AwsCertificateManagerOperationsApi CertificateManagerUntagResource = new(
        "CertificateManager.UntagResource");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerUntagResource => onCertificateManagerUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerUntagResource, Action<string> otherwise)
    {
        if (this == CertificateManagerUntagResource) onCertificateManagerUntagResource();
        else otherwise(Value);
    }
}
