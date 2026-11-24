using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Type of order. It can be one of the following
/// MARKET refers to market order
/// LIMIT refers to Limit Order
/// SL refers to Stop Loss Limit
/// SL-M refers to Stop Loss Market
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderTypeOpenApiDefinitionOrderApi>))]
public sealed record OrderTypeOpenApiDefinitionOrderApi : OpenStringEnum<OrderTypeOpenApiDefinitionOrderApi>
{
    private OrderTypeOpenApiDefinitionOrderApi(string value) : base(value)
    {
    }

    public static readonly OrderTypeOpenApiDefinitionOrderApi Market = new("MARKET");

    public static readonly OrderTypeOpenApiDefinitionOrderApi Limit = new("LIMIT");

    public static readonly OrderTypeOpenApiDefinitionOrderApi Sl = new("SL");

    public static readonly OrderTypeOpenApiDefinitionOrderApi SlM = new("SL-M");

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
