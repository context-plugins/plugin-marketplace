using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InstrumentType>))]
public sealed record InstrumentType : OpenStringEnum<InstrumentType>
{
    private InstrumentType(string value) : base(value)
    {
    }

    public static readonly InstrumentType ApplePay = new("APPLE_PAY");

    public static readonly InstrumentType GooglePay = new("GOOGLE_PAY");

    public static readonly InstrumentType PaymentCard = new("PAYMENT_CARD");

    public static readonly InstrumentType PaymentCardPresent = new("PAYMENT_CARD_PRESENT");

    public static readonly InstrumentType Token = new("TOKEN");

    public TResult Match<TResult>(Func<TResult> onApplePay,
        Func<TResult> onGooglePay,
        Func<TResult> onPaymentCard,
        Func<TResult> onPaymentCardPresent,
        Func<TResult> onToken,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplePay => onApplePay(),
            _ when this == GooglePay => onGooglePay(),
            _ when this == PaymentCard => onPaymentCard(),
            _ when this == PaymentCardPresent => onPaymentCardPresent(),
            _ when this == Token => onToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplePay,
        Action onGooglePay,
        Action onPaymentCard,
        Action onPaymentCardPresent,
        Action onToken,
        Action<string> otherwise)
    {
        if (this == ApplePay) onApplePay();
        else if (this == GooglePay) onGooglePay();
        else if (this == PaymentCard) onPaymentCard();
        else if (this == PaymentCardPresent) onPaymentCardPresent();
        else if (this == Token) onToken();
        else otherwise(Value);
    }
}
