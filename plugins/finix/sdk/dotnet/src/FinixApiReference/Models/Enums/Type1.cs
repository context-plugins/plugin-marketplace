using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of delivery method used to send the receipt.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Email = new("EMAIL");

    public static readonly Type1 Sms = new("SMS");

    public static readonly Type1 Print = new("PRINT");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onSms,
        Func<TResult> onPrint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Sms => onSms(),
            _ when this == Print => onPrint(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onSms, Action onPrint, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Sms) onSms();
        else if (this == Print) onPrint();
        else otherwise(Value);
    }
}
