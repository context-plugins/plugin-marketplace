using System;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Summary;

/// <summary>
/// The inputs of the GetPriceSummary operation.
/// </summary>
public sealed record GetPriceSummaryRequest
{
    public required string Keyword { get; init; }

    [Minimum(1)]
    [Maximum(240)]
    public int Count { get; init; } = 240;

    [Minimum(1)]
    [Maximum(100)]
    public int Page { get; init; } = 1;

    public EbaySite EbaySite { get; init; } = EbaySite.EbayCom;

    public string? CategoryId { get; init; }

    public SortOrder? SortOrder { get; init; }

    public double? MinPrice { get; init; }

    public double? MaxPrice { get; init; }

    public ItemCondition? ItemCondition { get; init; }

    [Minimum(0)]
    public int? ConditionId { get; init; }

    public BuyingFormat? BuyingFormat { get; init; }

    public SellerType? SellerType { get; init; }

    public DateTimeOffset? SoldAfter { get; init; }

    public DateTimeOffset? SoldBefore { get; init; }

    /// <summary>
    /// JSON object of eBay facet names and values.
    /// </summary>
    public string? AspectFilter { get; init; }

    public bool ExactMatch { get; init; } = false;

    public bool Relevance { get; init; } = true;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
