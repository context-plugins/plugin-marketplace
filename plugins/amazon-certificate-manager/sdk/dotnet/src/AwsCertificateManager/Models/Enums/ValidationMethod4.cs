using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can validate with DNS or validate with email. We recommend that you use DNS validation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationMethod4>))]
public sealed record ValidationMethod4 : OpenStringEnum<ValidationMethod4>
{
    private ValidationMethod4(string value) : base(value)
    {
    }

    public static readonly ValidationMethod4 Email = new("EMAIL");

    public static readonly ValidationMethod4 Dns = new("DNS");

    public static readonly ValidationMethod4 Http = new("HTTP");

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
