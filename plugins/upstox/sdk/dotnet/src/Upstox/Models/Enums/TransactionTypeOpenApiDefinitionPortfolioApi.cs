using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Indicates whether its a buy(b) or sell(s) order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionTypeOpenApiDefinitionPortfolioApi>))]
public sealed record TransactionTypeOpenApiDefinitionPortfolioApi : OpenStringEnum<TransactionTypeOpenApiDefinitionPortfolioApi>
{
    private TransactionTypeOpenApiDefinitionPortfolioApi(string value) : base(value)
    {
    }

    public static readonly TransactionTypeOpenApiDefinitionPortfolioApi Buy = new("BUY");

    public static readonly TransactionTypeOpenApiDefinitionPortfolioApi Sell = new("SELL");

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
