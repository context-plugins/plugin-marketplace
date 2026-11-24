using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The validation method for this configuration. Valid values: DNS – Validation using a CNAME record added to your DNS configuration. EMAIL – Validation using an approval email sent to domain contacts. HTTP – Validation using an HTTP resource placed on your web server.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationMethod1AwsCertificateManagerOperationsApi>))]
public sealed record ValidationMethod1AwsCertificateManagerOperationsApi : OpenStringEnum<ValidationMethod1AwsCertificateManagerOperationsApi>
{
    private ValidationMethod1AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly ValidationMethod1AwsCertificateManagerOperationsApi Email = new("EMAIL");

    public static readonly ValidationMethod1AwsCertificateManagerOperationsApi Dns = new("DNS");

    public static readonly ValidationMethod1AwsCertificateManagerOperationsApi Http = new("HTTP");

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
