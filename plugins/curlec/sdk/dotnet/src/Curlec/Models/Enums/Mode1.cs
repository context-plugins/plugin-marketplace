using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Case-sensitive
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode1>))]
public sealed record Mode1 : OpenStringEnum<Mode1>
{
    private Mode1(string value) : base(value)
    {
    }

    public static readonly Mode1 Neft = new("NEFT");

    public static readonly Mode1 Rtgs = new("RTGS");

    public static readonly Mode1 Imps = new("IMPS");

    public static readonly Mode1 Upi = new("UPI");

    public static readonly Mode1 Card = new("card");

    public static readonly Mode1 Amazonpay = new("amazonpay");

    public TResult Match<TResult>(Func<TResult> onNeft,
        Func<TResult> onRtgs,
        Func<TResult> onImps,
        Func<TResult> onUpi,
        Func<TResult> onCard,
        Func<TResult> onAmazonpay,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Neft => onNeft(),
            _ when this == Rtgs => onRtgs(),
            _ when this == Imps => onImps(),
            _ when this == Upi => onUpi(),
            _ when this == Card => onCard(),
            _ when this == Amazonpay => onAmazonpay(),
            _ => otherwise(Value)
        };

    public void Match(Action onNeft,
        Action onRtgs,
        Action onImps,
        Action onUpi,
        Action onCard,
        Action onAmazonpay,
        Action<string> otherwise)
    {
        if (this == Neft) onNeft();
        else if (this == Rtgs) onRtgs();
        else if (this == Imps) onImps();
        else if (this == Upi) onUpi();
        else if (this == Card) onCard();
        else if (this == Amazonpay) onAmazonpay();
        else otherwise(Value);
    }
}
