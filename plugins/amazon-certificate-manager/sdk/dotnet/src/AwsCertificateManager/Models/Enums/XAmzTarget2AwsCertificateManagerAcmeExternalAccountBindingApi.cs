using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi>))]
public sealed record XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi>
{
    private XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi CertificateManagerDescribeAcmeExternalAccountBinding = new(
        "CertificateManager.DescribeAcmeExternalAccountBinding");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerDescribeAcmeExternalAccountBinding,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CertificateManagerDescribeAcmeExternalAccountBinding => onCertificateManagerDescribeAcmeExternalAccountBinding(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerDescribeAcmeExternalAccountBinding, Action<string> otherwise)
    {
        if (this ==
            CertificateManagerDescribeAcmeExternalAccountBinding) onCertificateManagerDescribeAcmeExternalAccountBinding();
        else otherwise(Value);
    }
}
