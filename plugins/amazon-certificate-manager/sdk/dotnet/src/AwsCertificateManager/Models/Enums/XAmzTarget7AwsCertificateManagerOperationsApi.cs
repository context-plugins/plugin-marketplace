using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget7AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget7AwsCertificateManagerOperationsApi>
{
    private XAmzTarget7AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7AwsCertificateManagerOperationsApi CertificateManagerTagResource = new(
        "CertificateManager.TagResource");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerTagResource => onCertificateManagerTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerTagResource, Action<string> otherwise)
    {
        if (this == CertificateManagerTagResource) onCertificateManagerTagResource();
        else otherwise(Value);
    }
}
