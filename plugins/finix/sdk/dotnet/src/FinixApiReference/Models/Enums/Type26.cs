using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type26>))]
public sealed record Type26 : OpenStringEnum<Type26>
{
    private Type26(string value) : base(value)
    {
    }

    public static readonly Type26 PaymentCard = new("PAYMENT_CARD");

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
