using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The payment processor via which the sale was made.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentProcessor>))]
public sealed record PaymentProcessor : OpenStringEnum<PaymentProcessor>
{
    private PaymentProcessor(string value) : base(value)
    {
    }

    public static readonly PaymentProcessor Stripe = new("stripe");

    public static readonly PaymentProcessor Shopify = new("shopify");

    public static readonly PaymentProcessor Polar = new("polar");

    public static readonly PaymentProcessor Paddle = new("paddle");

    public static readonly PaymentProcessor Revenuecat = new("revenuecat");

    public static readonly PaymentProcessor Custom = new("custom");

    public static readonly PaymentProcessor Manual = new("manual");

    public TResult Match<TResult>(Func<TResult> onStripe,
        Func<TResult> onShopify,
        Func<TResult> onPolar,
        Func<TResult> onPaddle,
        Func<TResult> onRevenuecat,
        Func<TResult> onCustom,
        Func<TResult> onManual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stripe => onStripe(),
            _ when this == Shopify => onShopify(),
            _ when this == Polar => onPolar(),
            _ when this == Paddle => onPaddle(),
            _ when this == Revenuecat => onRevenuecat(),
            _ when this == Custom => onCustom(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onStripe,
        Action onShopify,
        Action onPolar,
        Action onPaddle,
        Action onRevenuecat,
        Action onCustom,
        Action onManual,
        Action<string> otherwise)
    {
        if (this == Stripe) onStripe();
        else if (this == Shopify) onShopify();
        else if (this == Polar) onPolar();
        else if (this == Paddle) onPaddle();
        else if (this == Revenuecat) onRevenuecat();
        else if (this == Custom) onCustom();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
