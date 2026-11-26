using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record ClusterBuyer
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("is_officer")]
    public required bool IsOfficer { get; init; }

    [JsonPropertyName("is_director")]
    public required bool IsDirector { get; init; }

    [JsonPropertyName("is_ten_percent_owner")]
    public required bool IsTenPercentOwner { get; init; }

    /// <summary>
    /// <c>independent</c> counts toward the cluster. <c>plan_like</c>: the buyer's fills all share an exact date-and-price pair with another buyer's (an allocation, an ESPP/DRIP lot), match another direct holder's lot at a round price, or the filing itself says the shares were not bought on the open market (then <c>reason</c> is set). <c>unpriced</c>: no fill carries a price (units, exchanges). <c>duplicate_of</c>: the same transaction another reporter already reported; <c>duplicate_of</c> names that reporter.
    /// </summary>
    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    /// <summary>
    /// Set on a <c>plan_like</c> buyer when the Form 4's own footnotes or remarks decided it: <c>placement</c> — bought from the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor units); <c>offering</c> — allocated in a public offering or IPO; <c>private</c> — a negotiated block from another holder (a stock transfer agreement, a private transaction). Null when the price shape alone decided the role. Read by the collector since 2026-09-26; earlier filings are backfilled for 90 days.
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason? Reason { get; init; }

    [JsonPropertyName("duplicate_of")]
    public required string? DuplicateOf { get; init; }

    [JsonPropertyName("fills")]
    public required int Fills { get; init; }

    /// <summary>
    /// Sum of this buyer's priced fills (decimal string).
    /// </summary>
    [JsonPropertyName("usd")]
    public required string? Usd { get; init; }

    [JsonPropertyName("first_date")]
    public required DateTimeOffset FirstDate { get; init; }

    [JsonPropertyName("last_date")]
    public required DateTimeOffset LastDate { get; init; }

    /// <summary>
    /// The <c>uid</c>s of the insider news rows fronting this buyer's filings — fetch <c>/api/news/{uid}/</c> for the event.
    /// </summary>
    [JsonPropertyName("news_uids")]
    public required IReadOnlyList<string> NewsUids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
