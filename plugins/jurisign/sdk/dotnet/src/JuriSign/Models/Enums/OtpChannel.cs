using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OtpChannel>))]
public sealed record OtpChannel : OpenStringEnum<OtpChannel>
{
    private OtpChannel(string value) : base(value)
    {
    }

    public static readonly OtpChannel Sms = new("sms");

    public static readonly OtpChannel Email = new("email");

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
