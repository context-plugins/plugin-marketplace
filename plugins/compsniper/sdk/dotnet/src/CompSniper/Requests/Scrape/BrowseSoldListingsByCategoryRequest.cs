using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the BrowseSoldListingsByCategory operation.
/// </summary>
public sealed record BrowseSoldListingsByCategoryRequest
{
    /// <summary>
    /// Positive numeric eBay category id (_sacat).
    /// </summary>
    [RegularExpression("^[1-9][0-9]*$")]
    public required string CategoryId { get; init; }

    /// <summary>
    /// Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation and filtering.
    /// </summary>
    [Minimum(1)]
    [Maximum(240)]
    public int Count { get; init; } = 240;

    [Minimum(1)]
    [Maximum(100)]
    public int Page { get; init; } = 1;

    public EbaySite EbaySite { get; init; } = EbaySite.EbayCom;

    public SortOrder? SortOrder { get; init; }

    public ItemCondition? ItemCondition { get; init; }

    [Minimum(0)]
    public int? ConditionId { get; init; }

    public BuyingFormat? BuyingFormat { get; init; }

    /// <summary>
    /// EU marketplaces only.
    /// </summary>
    public SellerType? SellerType { get; init; }

    public double? MinPrice { get; init; }

    public double? MaxPrice { get; init; }

    /// <summary>
    /// JSON object of human-readable eBay facets.
    /// </summary>
    public string? AspectFilter { get; init; }

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
