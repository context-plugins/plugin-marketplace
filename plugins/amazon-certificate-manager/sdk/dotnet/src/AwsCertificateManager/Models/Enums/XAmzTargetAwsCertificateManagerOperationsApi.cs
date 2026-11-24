using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsCertificateManagerOperationsApi>))]
public sealed record XAmzTargetAwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTargetAwsCertificateManagerOperationsApi>
{
    private XAmzTargetAwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsCertificateManagerOperationsApi CertificateManagerRenewCertificate = new(
        "CertificateManager.RenewCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRenewCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerRenewCertificate => onCertificateManagerRenewCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRenewCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerRenewCertificate) onCertificateManagerRenewCertificate();
        else otherwise(Value);
    }
}
