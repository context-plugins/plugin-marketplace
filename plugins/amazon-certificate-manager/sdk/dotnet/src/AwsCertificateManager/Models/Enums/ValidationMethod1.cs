using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by validation method.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationMethod1>))]
public sealed record ValidationMethod1 : OpenStringEnum<ValidationMethod1>
{
    private ValidationMethod1(string value) : base(value)
    {
    }

    public static readonly ValidationMethod1 Email = new("EMAIL");

    public static readonly ValidationMethod1 Dns = new("DNS");

    public static readonly ValidationMethod1 Http = new("HTTP");

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
