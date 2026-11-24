using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Mercari;

/// <summary>
/// The inputs of the SearchMercariListings operation.
/// </summary>
public sealed record SearchMercariListingsRequest
{
    [MinLength(1)]
    public required string Keyword { get; init; }

    [Minimum(1)]
    public int Page { get; init; } = 1;

    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 100;

    /// <summary>
    /// Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted as a compatibility alias for recentlySold.
    /// </summary>
    public SortOrderCompSniperMarketplaceAndShippingMercariApi SortOrder { get; init; } = SortOrderCompSniperMarketplaceAndShippingMercariApi.BestMatch;

    [Minimum(0.0)]
    public double? MinPrice { get; init; }

    [Minimum(0.0)]
    public double? MaxPrice { get; init; }

    public ItemConditionCompSniperMarketplaceAndShippingMercariApi ItemCondition { get; init; } = ItemConditionCompSniperMarketplaceAndShippingMercariApi.Any;

    public string? CategoryId { get; init; }

    public string? BrandId { get; init; }

    public Sold Sold { get; init; } = Sold.True;

    public IncludeListedAt IncludeListedAt { get; init; } = IncludeListedAt.False;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
