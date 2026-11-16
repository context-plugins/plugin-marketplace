using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The method of receipt delivery.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type22>))]
public sealed record Type22 : OpenStringEnum<Type22>
{
    private Type22(string value) : base(value)
    {
    }

    public static readonly Type22 Email = new("EMAIL");

    public static readonly Type22 Sms = new("SMS");

    public static readonly Type22 Print = new("PRINT");

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
