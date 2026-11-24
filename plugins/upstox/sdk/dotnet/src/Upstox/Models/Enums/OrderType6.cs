using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Type of order. It can be one of the following
/// MARKET refers to market order
/// LIMILT refers to Limit Order
/// SL refers to Stop Loss Limit
/// SL-M refers to Stop Loss Market
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderType6>))]
public sealed record OrderType6 : OpenStringEnum<OrderType6>
{
    private OrderType6(string value) : base(value)
    {
    }

    public static readonly OrderType6 Market = new("MARKET");

    public static readonly OrderType6 Limit = new("LIMIT");

    public static readonly OrderType6 Sl = new("SL");

    public static readonly OrderType6 SlM = new("SL-M");

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
