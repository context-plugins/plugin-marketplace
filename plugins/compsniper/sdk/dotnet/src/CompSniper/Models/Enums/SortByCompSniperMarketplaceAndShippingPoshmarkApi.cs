using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Sort order for results
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByCompSniperMarketplaceAndShippingPoshmarkApi>))]
public sealed record SortByCompSniperMarketplaceAndShippingPoshmarkApi : OpenStringEnum<SortByCompSniperMarketplaceAndShippingPoshmarkApi>
{
    private SortByCompSniperMarketplaceAndShippingPoshmarkApi(string value) : base(value)
    {
    }

    public static readonly SortByCompSniperMarketplaceAndShippingPoshmarkApi SoldRecently = new("sold_recently");

    public static readonly SortByCompSniperMarketplaceAndShippingPoshmarkApi PriceAsc = new("price_asc");

    public static readonly SortByCompSniperMarketplaceAndShippingPoshmarkApi PriceDesc = new("price_desc");

    public static readonly SortByCompSniperMarketplaceAndShippingPoshmarkApi Likes = new("likes");

    public TResult Match<TResult>(Func<TResult> onSoldRecently,
        Func<TResult> onPriceAsc,
        Func<TResult> onPriceDesc,
        Func<TResult> onLikes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SoldRecently => onSoldRecently(),
            _ when this == PriceAsc => onPriceAsc(),
            _ when this == PriceDesc => onPriceDesc(),
            _ when this == Likes => onLikes(),
            _ => otherwise(Value)
        };

    public void Match(Action onSoldRecently,
        Action onPriceAsc,
        Action onPriceDesc,
        Action onLikes,
        Action<string> otherwise)
    {
        if (this == SoldRecently) onSoldRecently();
        else if (this == PriceAsc) onPriceAsc();
        else if (this == PriceDesc) onPriceDesc();
        else if (this == Likes) onLikes();
        else otherwise(Value);
    }
}
