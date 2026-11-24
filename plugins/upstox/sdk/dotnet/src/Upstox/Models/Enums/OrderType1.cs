using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Type of order. It can be one of the following
/// MARKET refers to market order&lt;br&gt;LIMIT refers to Limit Order&lt;br&gt;SL refers to Stop Loss Limit&lt;br&gt;SL-M refers to Stop loss market
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderType1>))]
public sealed record OrderType1 : OpenStringEnum<OrderType1>
{
    private OrderType1(string value) : base(value)
    {
    }

    public static readonly OrderType1 Market = new("MARKET");

    public static readonly OrderType1 Limit = new("LIMIT");

    public static readonly OrderType1 Sl = new("SL");

    public static readonly OrderType1 SlM = new("SL-M");

    public TResult Match<TResult>(Func<TResult> onMarket,
        Func<TResult> onLimit,
        Func<TResult> onSl,
        Func<TResult> onSlM,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Market => onMarket(),
            _ when this == Limit => onLimit(),
            _ when this == Sl => onSl(),
            _ when this == SlM => onSlM(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarket, Action onLimit, Action onSl, Action onSlM, Action<string> otherwise)
    {
        if (this == Market) onMarket();
        else if (this == Limit) onLimit();
        else if (this == Sl) onSl();
        else if (this == SlM) onSlM();
        else otherwise(Value);
    }
}
