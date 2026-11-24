using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The domain validation method for the certificate. To migrate from email to DNS validation, specify DNS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationMethodAwsCertificateManagerOperationsApi>))]
public sealed record ValidationMethodAwsCertificateManagerOperationsApi : OpenStringEnum<ValidationMethodAwsCertificateManagerOperationsApi>
{
    private ValidationMethodAwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly ValidationMethodAwsCertificateManagerOperationsApi Email = new("EMAIL");

    public static readonly ValidationMethodAwsCertificateManagerOperationsApi Dns = new("DNS");

    public static readonly ValidationMethodAwsCertificateManagerOperationsApi Http = new("HTTP");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onDns,
        Func<TResult> onHttp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Dns => onDns(),
            _ when this == Http => onHttp(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onDns, Action onHttp, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Dns) onDns();
        else if (this == Http) onHttp();
        else otherwise(Value);
    }
}
