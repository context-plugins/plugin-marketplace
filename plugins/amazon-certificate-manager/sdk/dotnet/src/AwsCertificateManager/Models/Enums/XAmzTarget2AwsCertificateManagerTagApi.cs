using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerTagApi>))]
public sealed record XAmzTarget2AwsCertificateManagerTagApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerTagApi>
{
    private XAmzTarget2AwsCertificateManagerTagApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerTagApi CertificateManagerListTagsForResource = new(
        "CertificateManager.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerListTagsForResource => onCertificateManagerListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListTagsForResource, Action<string> otherwise)
    {
        if (this == CertificateManagerListTagsForResource) onCertificateManagerListTagsForResource();
        else otherwise(Value);
    }
}
