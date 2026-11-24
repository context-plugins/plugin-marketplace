using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 CertificateManagerListAcmeAccounts = new("CertificateManager.ListAcmeAccounts");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerListAcmeAccounts,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerListAcmeAccounts => onCertificateManagerListAcmeAccounts(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerListAcmeAccounts, Action<string> otherwise)
    {
        if (this == CertificateManagerListAcmeAccounts) onCertificateManagerListAcmeAccounts();
        else otherwise(Value);
    }
}
