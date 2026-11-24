using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Transfer mode — case-sensitive. amazonpay limited to ₹10,000 per transaction; no custom narration allowed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModeRazorpayXPayoutsApi>))]
public sealed record ModeRazorpayXPayoutsApi : OpenStringEnum<ModeRazorpayXPayoutsApi>
{
    private ModeRazorpayXPayoutsApi(string value) : base(value)
    {
    }

    public static readonly ModeRazorpayXPayoutsApi Neft = new("NEFT");

    public static readonly ModeRazorpayXPayoutsApi Rtgs = new("RTGS");

    public static readonly ModeRazorpayXPayoutsApi Imps = new("IMPS");

    public static readonly ModeRazorpayXPayoutsApi Upi = new("UPI");

    public static readonly ModeRazorpayXPayoutsApi Card = new("card");

    public static readonly ModeRazorpayXPayoutsApi Amazonpay = new("amazonpay");

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
