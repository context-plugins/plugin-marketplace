using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Indicates whether the order was a buy or sell order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionType1>))]
public sealed record TransactionType1 : OpenStringEnum<TransactionType1>
{
    private TransactionType1(string value) : base(value)
    {
    }

    public static readonly TransactionType1 Buy = new("BUY");

    public static readonly TransactionType1 Sell = new("SELL");

    public TResult Match<TResult>(Func<TResult> onBuy, Func<TResult> onSell, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buy => onBuy(),
            _ when this == Sell => onSell(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuy, Action onSell, Action<string> otherwise)
    {
        if (this == Buy) onBuy();
        else if (this == Sell) onSell();
        else otherwise(Value);
    }
}
