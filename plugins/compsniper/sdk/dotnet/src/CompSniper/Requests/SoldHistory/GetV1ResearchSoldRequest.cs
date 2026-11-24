using System;
using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.SoldHistory;

/// <summary>
/// The inputs of the GetV1ResearchSold operation.
/// </summary>
public sealed record GetV1ResearchSoldRequest
{
    [StringLength(200, MinimumLength = 1)]
    public required string Keyword { get; init; }

    public required DateTimeOffset StartDate { get; init; }

    public required DateTimeOffset EndDate { get; init; }

    public EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbaySite { get; init; } = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EbayCom;

    public Sort Sort { get; init; } = Sort.QuantityAscending;

    public Limit Limit { get; init; } = Limit.Value50;

    [Minimum(1)]
    [Maximum(200)]
    public int Page { get; init; } = 1;

    public bool SingleUnitOnly { get; init; } = false;

    public bool AllListingSites { get; init; } = false;

    public bool Relevance { get; init; } = false;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
