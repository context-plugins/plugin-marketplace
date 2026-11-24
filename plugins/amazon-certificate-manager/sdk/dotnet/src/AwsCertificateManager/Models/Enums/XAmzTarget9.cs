using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 CertificateManagerUpdateCertificateOptions = new(
        "CertificateManager.UpdateCertificateOptions");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerUpdateCertificateOptions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerUpdateCertificateOptions => onCertificateManagerUpdateCertificateOptions(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerUpdateCertificateOptions, Action<string> otherwise)
    {
        if (this == CertificateManagerUpdateCertificateOptions) onCertificateManagerUpdateCertificateOptions();
        else otherwise(Value);
    }
}
