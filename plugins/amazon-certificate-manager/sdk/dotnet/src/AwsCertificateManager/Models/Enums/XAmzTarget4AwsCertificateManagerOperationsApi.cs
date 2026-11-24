using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget4AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget4AwsCertificateManagerOperationsApi>
{
    private XAmzTarget4AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCertificateManagerOperationsApi CertificateManagerPutAccountConfiguration = new(
        "CertificateManager.PutAccountConfiguration");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerPutAccountConfiguration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerPutAccountConfiguration => onCertificateManagerPutAccountConfiguration(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerPutAccountConfiguration, Action<string> otherwise)
    {
        if (this == CertificateManagerPutAccountConfiguration) onCertificateManagerPutAccountConfiguration();
        else otherwise(Value);
    }
}
