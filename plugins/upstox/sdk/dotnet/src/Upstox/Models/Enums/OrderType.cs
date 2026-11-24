using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderType>))]
public sealed record OrderType : OpenStringEnum<OrderType>
{
    private OrderType(string value) : base(value)
    {
    }

    public static readonly OrderType Market = new("MARKET");

    public static readonly OrderType Limit = new("LIMIT");

    public static readonly OrderType Sl = new("SL");

    public static readonly OrderType SlM = new("SL-M");

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
