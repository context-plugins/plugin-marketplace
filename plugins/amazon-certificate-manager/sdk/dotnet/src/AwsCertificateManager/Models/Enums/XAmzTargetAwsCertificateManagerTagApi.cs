using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerTagApi>))]
public sealed record XAmzTargetAwsCertificateManagerTagApi : OpenStringEnum<XAmzTargetAwsCertificateManagerTagApi>
{
    private XAmzTargetAwsCertificateManagerTagApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerTagApi CertificateManagerAddTagsToCertificate = new(
        "CertificateManager.AddTagsToCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerAddTagsToCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerAddTagsToCertificate => onCertificateManagerAddTagsToCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerAddTagsToCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerAddTagsToCertificate) onCertificateManagerAddTagsToCertificate();
        else otherwise(Value);
    }
}
