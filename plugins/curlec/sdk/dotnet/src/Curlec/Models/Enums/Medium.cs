using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Medium>))]
public sealed record Medium : OpenStringEnum<Medium>
{
    private Medium(string value) : base(value)
    {
    }

    public static readonly Medium Sms = new("sms");

    public static readonly Medium Email = new("email");

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
