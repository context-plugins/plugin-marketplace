using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Include the value that best applies to the merchant's refund policy.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RefundPolicy>))]
public sealed record RefundPolicy : OpenStringEnum<RefundPolicy>
{
    private RefundPolicy(string value) : base(value)
    {
    }

    public static readonly RefundPolicy NoRefunds = new("NO_REFUNDS");

    public static readonly RefundPolicy MerchandiseExchangeOnly = new("MERCHANDISE_EXCHANGE_ONLY");

    public static readonly RefundPolicy Within30Days = new("WITHIN_30_DAYS");

    public static readonly RefundPolicy Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onNoRefunds,
        Func<TResult> onMerchandiseExchangeOnly,
        Func<TResult> onWithin30Days,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoRefunds => onNoRefunds(),
            _ when this == MerchandiseExchangeOnly => onMerchandiseExchangeOnly(),
            _ when this == Within30Days => onWithin30Days(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoRefunds,
        Action onMerchandiseExchangeOnly,
        Action onWithin30Days,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == NoRefunds) onNoRefunds();
        else if (this == MerchandiseExchangeOnly) onMerchandiseExchangeOnly();
        else if (this == Within30Days) onWithin30Days();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
