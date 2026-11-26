using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// Signal label from the transaction code: <c>buy</c> (P, open-market purchase), <c>sell</c> (S, open-market sale), <c>other</c> for everything else — including D (sale to the issuer: a buyback/redemption, not an open-market disposition). Use <c>transaction_code</c> for your own mapping.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Side>))]
public sealed record Side : OpenStringEnum<Side>
{
    private Side(string value) : base(value)
    {
    }

    public static readonly Side Buy = new("buy");

    public static readonly Side Sell = new("sell");

    public static readonly Side Other = new("other");

    public TResult Match<TResult>(Func<TResult> onBuy,
        Func<TResult> onSell,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buy => onBuy(),
            _ when this == Sell => onSell(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuy, Action onSell, Action onOther, Action<string> otherwise)
    {
        if (this == Buy) onBuy();
        else if (this == Sell) onSell();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
