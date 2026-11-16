using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityType10>))]
public sealed record EntityType10 : OpenStringEnum<EntityType10>
{
    private EntityType10(string value) : base(value)
    {
    }

    public static readonly EntityType10 CheckoutForm = new("CHECKOUT_FORM");

    public static readonly EntityType10 PaymentLink = new("PAYMENT_LINK");

    public static readonly EntityType10 PayoutLink = new("PAYOUT_LINK");

    public TResult Match<TResult>(Func<TResult> onCheckoutForm,
        Func<TResult> onPaymentLink,
        Func<TResult> onPayoutLink,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CheckoutForm => onCheckoutForm(),
            _ when this == PaymentLink => onPaymentLink(),
            _ when this == PayoutLink => onPayoutLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onCheckoutForm, Action onPaymentLink, Action onPayoutLink, Action<string> otherwise)
    {
        if (this == CheckoutForm) onCheckoutForm();
        else if (this == PaymentLink) onPaymentLink();
        else if (this == PayoutLink) onPayoutLink();
        else otherwise(Value);
    }
}
