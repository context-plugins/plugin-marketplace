using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCertificateManagerTagApi>))]
public sealed record XAmzTarget3AwsCertificateManagerTagApi : OpenStringEnum<XAmzTarget3AwsCertificateManagerTagApi>
{
    private XAmzTarget3AwsCertificateManagerTagApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCertificateManagerTagApi CertificateManagerRemoveTagsFromCertificate = new(
        "CertificateManager.RemoveTagsFromCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRemoveTagsFromCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerRemoveTagsFromCertificate => onCertificateManagerRemoveTagsFromCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRemoveTagsFromCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerRemoveTagsFromCertificate) onCertificateManagerRemoveTagsFromCertificate();
        else otherwise(Value);
    }
}
