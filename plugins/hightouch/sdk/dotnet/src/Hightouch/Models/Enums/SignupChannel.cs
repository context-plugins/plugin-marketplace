using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Delivery channels a signup can consent on.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignupChannel>))]
public sealed record SignupChannel : OpenStringEnum<SignupChannel>
{
    private SignupChannel(string value) : base(value)
    {
    }

    public static readonly SignupChannel Email = new("email");

    public static readonly SignupChannel Sms = new("sms");

    public TResult Match<TResult>(Func<TResult> onEmail, Func<TResult> onSms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Sms => onSms(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onSms, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Sms) onSms();
        else otherwise(Value);
    }
}
