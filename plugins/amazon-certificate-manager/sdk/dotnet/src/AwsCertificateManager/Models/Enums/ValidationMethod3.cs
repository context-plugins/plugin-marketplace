using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The domain validation method for the certificate. To migrate from email to DNS validation, specify DNS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationMethod3>))]
public sealed record ValidationMethod3 : OpenStringEnum<ValidationMethod3>
{
    private ValidationMethod3(string value) : base(value)
    {
    }

    public static readonly ValidationMethod3 Email = new("EMAIL");

    public static readonly ValidationMethod3 Dns = new("DNS");

    public static readonly ValidationMethod3 Http = new("HTTP");

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
