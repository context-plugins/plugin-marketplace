using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerCertificatesApi>))]
public sealed record XAmzTargetAwsCertificateManagerCertificatesApi : OpenStringEnum<XAmzTargetAwsCertificateManagerCertificatesApi>
{
    private XAmzTargetAwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerCertificatesApi CertificateManagerDeleteCertificate = new(
        "CertificateManager.DeleteCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDeleteCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerDeleteCertificate => onCertificateManagerDeleteCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDeleteCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerDeleteCertificate) onCertificateManagerDeleteCertificate();
        else otherwise(Value);
    }
}
