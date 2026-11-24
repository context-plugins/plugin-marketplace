using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget CertificateManagerDescribeAcmeAccount = new(
        "CertificateManager.DescribeAcmeAccount");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDescribeAcmeAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerDescribeAcmeAccount => onCertificateManagerDescribeAcmeAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDescribeAcmeAccount, Action<string> otherwise)
    {
        if (this == CertificateManagerDescribeAcmeAccount) onCertificateManagerDescribeAcmeAccount();
        else otherwise(Value);
    }
}
