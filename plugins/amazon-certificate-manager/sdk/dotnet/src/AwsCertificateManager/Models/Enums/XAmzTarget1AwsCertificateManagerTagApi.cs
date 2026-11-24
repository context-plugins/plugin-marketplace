using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsCertificateManagerTagApi>))]
public sealed record XAmzTarget1AwsCertificateManagerTagApi : OpenStringEnum<XAmzTarget1AwsCertificateManagerTagApi>
{
    private XAmzTarget1AwsCertificateManagerTagApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsCertificateManagerTagApi CertificateManagerListTagsForCertificate = new(
        "CertificateManager.ListTagsForCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListTagsForCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerListTagsForCertificate => onCertificateManagerListTagsForCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListTagsForCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerListTagsForCertificate) onCertificateManagerListTagsForCertificate();
        else otherwise(Value);
    }
}
