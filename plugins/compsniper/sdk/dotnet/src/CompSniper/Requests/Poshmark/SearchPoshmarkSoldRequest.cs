using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Poshmark;

/// <summary>
/// The inputs of the SearchPoshmarkSold operation.
/// </summary>
public sealed record SearchPoshmarkSoldRequest
{
    [MinLength(1)]
    public required string Keyword { get; init; }

    [Minimum(1)]
    public int Page { get; init; } = 1;

    [Minimum(0.0)]
    public double? MinPrice { get; init; }

    [Minimum(0.0)]
    public double? MaxPrice { get; init; }

    public DepartmentCompSniperMarketplaceAndShippingPoshmarkApi Department { get; init; } = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.All;

    public ConditionCompSniperMarketplaceAndShippingPoshmarkApi Condition { get; init; } = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.All;

    public string? Brand { get; init; }

    public SortByCompSniperMarketplaceAndShippingPoshmarkApi SortBy { get; init; } = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SoldRecently;

    /// <summary>
    /// Adds public seller location, approximate sold-count evidence, and average ship time. Sold date, listed date, colors, description, category, and condition are already returned when present in the native search response. This still uses one CompSniper request.
    /// </summary>
    public Enrich Enrich { get; init; } = Enrich.False;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
