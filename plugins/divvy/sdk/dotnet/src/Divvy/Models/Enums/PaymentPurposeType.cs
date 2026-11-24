using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Type of payment purpose.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentPurposeType>))]
public sealed record PaymentPurposeType : OpenStringEnum<PaymentPurposeType>
{
    private PaymentPurposeType(string value) : base(value)
    {
    }

    public static readonly PaymentPurposeType Code = new("CODE");

    public static readonly PaymentPurposeType Text = new("TEXT");

    public TResult Match<TResult>(Func<TResult> onCode, Func<TResult> onText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Code => onCode(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onCode, Action onText, Action<string> otherwise)
    {
        if (this == Code) onCode();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
