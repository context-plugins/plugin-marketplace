using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Side1>))]
public sealed record Side1 : OpenStringEnum<Side1>
{
    private Side1(string value) : base(value)
    {
    }

    public static readonly Side1 Buy = new("buy");

    public static readonly Side1 Sell = new("sell");

    public static readonly Side1 All = new("all");

    public TResult Match<TResult>(Func<TResult> onBuy,
        Func<TResult> onSell,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buy => onBuy(),
            _ when this == Sell => onSell(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuy, Action onSell, Action onAll, Action<string> otherwise)
    {
        if (this == Buy) onBuy();
        else if (this == Sell) onSell();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
