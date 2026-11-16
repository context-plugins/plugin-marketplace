using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the type of resource getting verified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type21>))]
public sealed record Type21 : OpenStringEnum<Type21>
{
    private Type21(string value) : base(value)
    {
    }

    public static readonly Type21 PaymentInstrument = new("PAYMENT_INSTRUMENT");

    public TResult Match<TResult>(Func<TResult> onPaymentInstrument, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentInstrument => onPaymentInstrument(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentInstrument, Action<string> otherwise)
    {
        if (this == PaymentInstrument) onPaymentInstrument();
        else otherwise(Value);
    }
}
