using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The validation method that the certificate was using before the update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<From>))]
public sealed record From : OpenStringEnum<From>
{
    private From(string value) : base(value)
    {
    }

    public static readonly From Email = new("EMAIL");

    public static readonly From Dns = new("DNS");

    public static readonly From Http = new("HTTP");

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
