using System;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the SearchSoldListings operation.
/// </summary>
public sealed record SearchSoldListingsRequest
{
    /// <summary>
    /// Product to search. Supports eBay operators, e.g. minus-sign exclusions ('airpods pro -case').
    /// </summary>
    public required string Keyword { get; init; }

    /// <summary>
    /// Maximum items to return per page. This is a ceiling; fewer valid rows may remain after baseline validation, date filters, or relevance cleanup.
    /// </summary>
    [Minimum(1)]
    [Maximum(240)]
    public int Count { get; init; } = 240;

    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// eBay marketplace.
    /// </summary>
    public EbaySite EbaySite { get; init; } = EbaySite.EbayCom;

    /// <summary>
    /// eBay category id (_sacat).
    /// </summary>
    public string CategoryId { get; init; } = "0";

    public SortOrder1? SortOrder { get; init; }

    public ItemLocation ItemLocation { get; init; } = ItemLocation.Default;

    public ItemCondition? ItemCondition { get; init; }

    /// <summary>
    /// Numeric eBay condition id; overrides itemCondition.
    /// </summary>
    [Minimum(0)]
    public int? ConditionId { get; init; }

    public BuyingFormat BuyingFormat { get; init; } = BuyingFormat.All;

    /// <summary>
    /// Filters labeled sellers on ebay.de, ebay.fr, ebay.it, and ebay.es. Ignored elsewhere; unlabeled EU rows are excluded while filtering.
    /// </summary>
    public SellerType? SellerType { get; init; }

    public double? MinPrice { get; init; }

    public double? MaxPrice { get; init; }

    /// <summary>
    /// Sold-search compatibility option. Ignored when sold=false.
    /// </summary>
    public bool IncludeCompleteListing { get; init; } = true;

    /// <summary>
    /// true returns completed sales. false returns current active listings with currentPrice, watcherCount, unitsSold, acceptsOffers, and timeLeft when visible.
    /// </summary>
    public bool Sold { get; init; } = true;

    public DateTimeOffset? SoldAfter { get; init; }

    public DateTimeOffset? SoldBefore { get; init; }

    /// <summary>
    /// JSON object of human-readable eBay facet names. Values may be strings, pipe-delimited strings, or arrays of strings.
    /// </summary>
    public string? AspectFilter { get; init; }

    /// <summary>
    /// When true, removes listings after eBay's explicit Results matching fewer words boundary before relevance cleanup. When the boundary is absent, rows are unchanged. This follows eBay's section split and does not independently prove semantic exactness. false preserves the existing broad-search cache and behavior. Leave it off for long, specific keywords (full card numbers, full set names): eBay often has no exact matches for those, so exactMatch=true can return no results even when the item sold many times.
    /// </summary>
    public bool ExactMatch { get; init; } = false;

    /// <summary>
    /// When true, query-aware deterministic checks remove explicit pricing mismatches before one bounded semantic cleanup stage handles accessories, parts, and wrong models. Explicit query intent is preserved. false disables both relevance stages and returns broad valid matches. Baseline validation of item IDs, item URLs, prices, sold dates, and duplicate IDs always applies.
    /// </summary>
    public bool Relevance { get; init; } = true;

    /// <summary>
    /// When true, sold rows where bestOfferAccepted is true gain acceptedOfferPrice (the price the buyer actually paid, null unless found) and acceptedOfferPriceStatus (found, pending or not_available). soldPrice is never changed. US-dollar sales only; other currencies return not_available. No extra charge. Ignored with sold=false.
    /// </summary>
    public bool BestOfferPrice { get; init; } = false;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
