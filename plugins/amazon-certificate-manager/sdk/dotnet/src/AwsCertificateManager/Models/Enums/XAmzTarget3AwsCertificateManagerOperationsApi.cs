using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget3AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget3AwsCertificateManagerOperationsApi>
{
    private XAmzTarget3AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsCertificateManagerOperationsApi CertificateManagerGetAccountConfiguration = new(
        "CertificateManager.GetAccountConfiguration");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerGetAccountConfiguration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerGetAccountConfiguration => onCertificateManagerGetAccountConfiguration(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerGetAccountConfiguration, Action<string> otherwise)
    {
        if (this == CertificateManagerGetAccountConfiguration) onCertificateManagerGetAccountConfiguration();
        else otherwise(Value);
    }
}
