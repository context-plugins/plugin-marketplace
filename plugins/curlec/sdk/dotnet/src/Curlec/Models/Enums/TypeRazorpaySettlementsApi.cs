using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeRazorpaySettlementsApi>))]
public sealed record TypeRazorpaySettlementsApi : OpenStringEnum<TypeRazorpaySettlementsApi>
{
    private TypeRazorpaySettlementsApi(string value) : base(value)
    {
    }

    public static readonly TypeRazorpaySettlementsApi Payment = new("payment");

    public static readonly TypeRazorpaySettlementsApi Refund = new("refund");

    public static readonly TypeRazorpaySettlementsApi Transfer = new("transfer");

    public static readonly TypeRazorpaySettlementsApi Adjustment = new("adjustment");

    public TResult Match<TResult>(Func<TResult> onPayment,
        Func<TResult> onRefund,
        Func<TResult> onTransfer,
        Func<TResult> onAdjustment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payment => onPayment(),
            _ when this == Refund => onRefund(),
            _ when this == Transfer => onTransfer(),
            _ when this == Adjustment => onAdjustment(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayment,
        Action onRefund,
        Action onTransfer,
        Action onAdjustment,
        Action<string> otherwise)
    {
        if (this == Payment) onPayment();
        else if (this == Refund) onRefund();
        else if (this == Transfer) onTransfer();
        else if (this == Adjustment) onAdjustment();
        else otherwise(Value);
    }
}
