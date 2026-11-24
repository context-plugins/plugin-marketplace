using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 CertificateManagerRevokeAcmeAccount = new(
        "CertificateManager.RevokeAcmeAccount");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerRevokeAcmeAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerRevokeAcmeAccount => onCertificateManagerRevokeAcmeAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerRevokeAcmeAccount, Action<string> otherwise)
    {
        if (this == CertificateManagerRevokeAcmeAccount) onCertificateManagerRevokeAcmeAccount();
        else otherwise(Value);
    }
}
