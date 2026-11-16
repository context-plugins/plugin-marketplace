using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type18>))]
public sealed record Type18 : OpenStringEnum<Type18>
{
    private Type18(string value) : base(value)
    {
    }

    public static readonly Type18 PaymentCard = new("PAYMENT_CARD");

    public static readonly Type18 Token = new("TOKEN");

    public static readonly Type18 GooglePay = new("GOOGLE_PAY");

    public static readonly Type18 ApplePay = new("APPLE_PAY");

    public TResult Match<TResult>(Func<TResult> onPaymentCard,
        Func<TResult> onToken,
        Func<TResult> onGooglePay,
        Func<TResult> onApplePay,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentCard => onPaymentCard(),
            _ when this == Token => onToken(),
            _ when this == GooglePay => onGooglePay(),
            _ when this == ApplePay => onApplePay(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentCard,
        Action onToken,
        Action onGooglePay,
        Action onApplePay,
        Action<string> otherwise)
    {
        if (this == PaymentCard) onPaymentCard();
        else if (this == Token) onToken();
        else if (this == GooglePay) onGooglePay();
        else if (this == ApplePay) onApplePay();
        else otherwise(Value);
    }
}
