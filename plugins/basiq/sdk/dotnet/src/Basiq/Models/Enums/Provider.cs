using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The digital wallet provider.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Provider>))]
public sealed record Provider : OpenStringEnum<Provider>
{
    private Provider(string value) : base(value)
    {
    }

    public static readonly Provider PayPal = new("PayPal");

    public static readonly Provider Venmo = new("Venmo");

    public static readonly Provider GooglePay = new("GooglePay");

    public static readonly Provider ApplePay = new("ApplePay");

    public static readonly Provider Other = new("Other");

    public TResult Match<TResult>(Func<TResult> onPayPal,
        Func<TResult> onVenmo,
        Func<TResult> onGooglePay,
        Func<TResult> onApplePay,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayPal => onPayPal(),
            _ when this == Venmo => onVenmo(),
            _ when this == GooglePay => onGooglePay(),
            _ when this == ApplePay => onApplePay(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayPal,
        Action onVenmo,
        Action onGooglePay,
        Action onApplePay,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == PayPal) onPayPal();
        else if (this == Venmo) onVenmo();
        else if (this == GooglePay) onGooglePay();
        else if (this == ApplePay) onApplePay();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
