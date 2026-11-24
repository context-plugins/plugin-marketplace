using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PriceSource>))]
public sealed record PriceSource : OpenStringEnum<PriceSource>
{
    private PriceSource(string value) : base(value)
    {
    }

    public static readonly PriceSource EbayDiscounted = new("ebay_discounted");

    public static readonly PriceSource Retail = new("retail");

    public TResult Match<TResult>(Func<TResult> onEbayDiscounted,
        Func<TResult> onRetail,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EbayDiscounted => onEbayDiscounted(),
            _ when this == Retail => onRetail(),
            _ => otherwise(Value)
        };

    public void Match(Action onEbayDiscounted, Action onRetail, Action<string> otherwise)
    {
        if (this == EbayDiscounted) onEbayDiscounted();
        else if (this == Retail) onRetail();
        else otherwise(Value);
    }
}
