using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The target validation method for the update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<To>))]
public sealed record To : OpenStringEnum<To>
{
    private To(string value) : base(value)
    {
    }

    public static readonly To Email = new("EMAIL");

    public static readonly To Dns = new("DNS");

    public static readonly To Http = new("HTTP");

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
