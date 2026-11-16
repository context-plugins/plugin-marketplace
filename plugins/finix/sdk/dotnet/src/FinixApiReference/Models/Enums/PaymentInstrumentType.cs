using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Payment Instrument</c> that triggered this <c>Instrument History Entry</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentInstrumentType>))]
public sealed record PaymentInstrumentType : OpenStringEnum<PaymentInstrumentType>
{
    private PaymentInstrumentType(string value) : base(value)
    {
    }

    public static readonly PaymentInstrumentType PaymentCard = new("PAYMENT_CARD");

    public TResult Match<TResult>(Func<TResult> onPaymentCard, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentCard => onPaymentCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentCard, Action<string> otherwise)
    {
        if (this == PaymentCard) onPaymentCard();
        else otherwise(Value);
    }
}
