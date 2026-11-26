using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// One issuer's run of Form 4 purchases and its verdict. Money fields are decimal STRINGS. <c>buyers</c> counts independent buyers (the cluster); <c>buyers_total</c> everyone who bought, including plan, unpriced and duplicate reporters.
/// </summary>
public record InsiderCluster
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// SEC Central Index Key of the issuer.
    /// </summary>
    [JsonPropertyName("cik")]
    public required int Cik { get; init; }

    /// <summary>
    /// First purchase date of the episode.
    /// </summary>
    [JsonPropertyName("window_start")]
    public required DateTimeOffset WindowStart { get; init; }

    /// <summary>
    /// Last purchase date of the episode.
    /// </summary>
    [JsonPropertyName("window_end")]
    public required DateTimeOffset WindowEnd { get; init; }

    /// <summary>
    /// When the episode's latest filing reached EDGAR — the clock <c>days</c> is measured on.
    /// </summary>
    [JsonPropertyName("known_at")]
    public required DateTimeOffset KnownAt { get; init; }

    /// <summary>
    /// Independent buyers.
    /// </summary>
    [JsonPropertyName("buyers")]
    public required int Buyers { get; init; }

    /// <summary>
    /// Every distinct reporting owner after duplicate merging.
    /// </summary>
    [JsonPropertyName("buyers_total")]
    public required int BuyersTotal { get; init; }

    /// <summary>
    /// Independent buyers who are an officer or director.
    /// </summary>
    [JsonPropertyName("officer_director_buyers")]
    public required int OfficerDirectorBuyers { get; init; }

    /// <summary>
    /// Independent buyers flagged as 10% owners.
    /// </summary>
    [JsonPropertyName("ten_percent_owner_buyers")]
    public required int TenPercentOwnerBuyers { get; init; }

    /// <summary>
    /// Purchase tranches counted (a transaction reported twice is counted once).
    /// </summary>
    [JsonPropertyName("fills")]
    public required int Fills { get; init; }

    /// <summary>
    /// Distinct Form 4 filings.
    /// </summary>
    [JsonPropertyName("filings")]
    public required int Filings { get; init; }

    /// <summary>
    /// Sum of the counted tranches' values (decimal string); <c>null</c> when no tranche carries a price.
    /// </summary>
    [JsonPropertyName("total_usd")]
    public required string? TotalUsd { get; init; }

    /// <summary>
    /// <c>true</c> when at least one counted tranche has no price, so <c>total_usd</c> understates the episode.
    /// </summary>
    [JsonPropertyName("value_partial")]
    public required bool ValuePartial { get; init; }

    [JsonPropertyName("distinct_dates")]
    public required int DistinctDates { get; init; }

    /// <summary>
    /// Distinct prices to the cent across priced tranches.
    /// </summary>
    [JsonPropertyName("distinct_prices")]
    public required int DistinctPrices { get; init; }

    [JsonPropertyName("pattern")]
    public required Pattern Pattern { get; init; }

    /// <summary>
    /// Machine-readable notes behind the verdict, e.g. <c>mass_uniform_date_price</c>, <c>same_price_across_dates</c>, <c>one_price_multi_date</c>, <c>plan_like_buyers</c>, <c>off_market_buyers</c> (a buyer whose filing says placement / offering / private), <c>unpriced_buyers</c>, <c>duplicate_filings</c>, <c>no_officer_or_director</c>.
    /// </summary>
    [JsonPropertyName("pattern_reasons")]
    public required IReadOnlyList<string> PatternReasons { get; init; }

    [JsonPropertyName("buyers_detail")]
    public required IReadOnlyList<ClusterBuyer> BuyersDetail { get; init; }

    [JsonPropertyName("filings_detail")]
    public required IReadOnlyList<ClusterFiling> FilingsDetail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
