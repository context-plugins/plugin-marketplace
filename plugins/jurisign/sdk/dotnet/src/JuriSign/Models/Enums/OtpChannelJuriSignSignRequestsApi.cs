using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

/// <summary>
/// OTP verification channel
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OtpChannelJuriSignSignRequestsApi>))]
public sealed record OtpChannelJuriSignSignRequestsApi : OpenStringEnum<OtpChannelJuriSignSignRequestsApi>
{
    private OtpChannelJuriSignSignRequestsApi(string value) : base(value)
    {
    }

    public static readonly OtpChannelJuriSignSignRequestsApi Sms = new("sms");

    public static readonly OtpChannelJuriSignSignRequestsApi Email = new("email");

    public TResult Match<TResult>(Func<TResult> onSms, Func<TResult> onEmail, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sms => onSms(),
            _ when this == Email => onEmail(),
            _ => otherwise(Value)
        };

    public void Match(Action onSms, Action onEmail, Action<string> otherwise)
    {
        if (this == Sms) onSms();
        else if (this == Email) onEmail();
        else otherwise(Value);
    }
}
