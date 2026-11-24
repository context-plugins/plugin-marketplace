using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted as a compatibility alias for recentlySold.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderCompSniperMarketplaceAndShippingMercariApi>))]
public sealed record SortOrderCompSniperMarketplaceAndShippingMercariApi : OpenStringEnum<SortOrderCompSniperMarketplaceAndShippingMercariApi>
{
    private SortOrderCompSniperMarketplaceAndShippingMercariApi(string value) : base(value)
    {
    }

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi BestMatch = new("bestMatch");

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi Newest = new("newest");

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi LowestPrice = new("lowestPrice");

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi HighestPrice = new("highestPrice");

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi RecentlySold = new("recentlySold");

    public static readonly SortOrderCompSniperMarketplaceAndShippingMercariApi MostPopular = new("mostPopular");

    public TResult Match<TResult>(Func<TResult> onBestMatch,
        Func<TResult> onNewest,
        Func<TResult> onLowestPrice,
        Func<TResult> onHighestPrice,
        Func<TResult> onRecentlySold,
        Func<TResult> onMostPopular,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BestMatch => onBestMatch(),
            _ when this == Newest => onNewest(),
            _ when this == LowestPrice => onLowestPrice(),
            _ when this == HighestPrice => onHighestPrice(),
            _ when this == RecentlySold => onRecentlySold(),
            _ when this == MostPopular => onMostPopular(),
            _ => otherwise(Value)
        };

    public void Match(Action onBestMatch,
        Action onNewest,
        Action onLowestPrice,
        Action onHighestPrice,
        Action onRecentlySold,
        Action onMostPopular,
        Action<string> otherwise)
    {
        if (this == BestMatch) onBestMatch();
        else if (this == Newest) onNewest();
        else if (this == LowestPrice) onLowestPrice();
        else if (this == HighestPrice) onHighestPrice();
        else if (this == RecentlySold) onRecentlySold();
        else if (this == MostPopular) onMostPopular();
        else otherwise(Value);
    }
}
