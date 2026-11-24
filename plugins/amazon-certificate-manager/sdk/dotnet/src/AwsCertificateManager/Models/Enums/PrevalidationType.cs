using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The type of prevalidation used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PrevalidationType>))]
public sealed record PrevalidationType : OpenStringEnum<PrevalidationType>
{
    private PrevalidationType(string value) : base(value)
    {
    }

    public static readonly PrevalidationType DnsPrevalidation = new("DNS_PREVALIDATION");

    public TResult Match<TResult>(Func<TResult> onDnsPrevalidation, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DnsPrevalidation => onDnsPrevalidation(),
            _ => otherwise(Value)
        };

    public void Match(Action onDnsPrevalidation, Action<string> otherwise)
    {
        if (this == DnsPrevalidation) onDnsPrevalidation();
        else otherwise(Value);
    }
}
