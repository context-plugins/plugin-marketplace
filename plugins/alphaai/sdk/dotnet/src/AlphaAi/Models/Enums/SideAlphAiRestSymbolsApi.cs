using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// Value-flow label; <c>transaction_code</c> carries the raw code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SideAlphAiRestSymbolsApi>))]
public sealed record SideAlphAiRestSymbolsApi : OpenStringEnum<SideAlphAiRestSymbolsApi>
{
    private SideAlphAiRestSymbolsApi(string value) : base(value)
    {
    }

    public static readonly SideAlphAiRestSymbolsApi Buy = new("buy");

    public static readonly SideAlphAiRestSymbolsApi Sell = new("sell");

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
