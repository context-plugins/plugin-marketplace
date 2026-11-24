using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

/// <summary>
/// Structured SEC Form 4 event: the aggregate of the news row's whole transaction group (one row fronts a filing's non-derivative trades of one type and holding form, so a 10b5-1 ladder is ONE event). <c>shares</c> and <c>total_value_usd</c> are group sums; <c>avg_price_usd</c> is the value-weighted average over priced tranches. Money and share fields are decimal STRINGS to preserve precision.
/// </summary>
public record InsiderEvent
{
    /// <summary>
    /// Signal label from the transaction code: <c>buy</c> (P, open-market purchase), <c>sell</c> (S, open-market sale), <c>other</c> for everything else — including D (sale to the issuer: a buyback/redemption, not an open-market disposition). Use <c>transaction_code</c> for your own mapping.
    /// </summary>
    [JsonPropertyName("side")]
    public required Side Side { get; init; }

    /// <summary>
    /// Raw SEC Form 4 transaction code (<c>P</c>, <c>S</c>, <c>D</c>, …).
    /// </summary>
    [JsonPropertyName("transaction_code")]
    public required string TransactionCode { get; init; }

    /// <summary>
    /// Total shares across the event's tranches (decimal string).
    /// </summary>
    [JsonPropertyName("shares")]
    public required string Shares { get; init; }

    /// <summary>
    /// Value-weighted average price per share over priced tranches. <c>null</c> when the filing prices no tranche.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avg_price_usd")]
    public string? AvgPriceUsd { get; init; }

    /// <summary>
    /// Total USD value across priced tranches (a lower bound when some tranches are unpriced). <c>null</c> when no tranche is priced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_value_usd")]
    public string? TotalValueUsd { get; init; }

    /// <summary>
    /// True when any tranche executed under a pre-arranged 10b5-1 plan. Filterable on this endpoint: <c>?is_10b5_1=false</c> keeps only discretionary events.
    /// </summary>
    [JsonPropertyName("is_10b5_1")]
    public required bool Is10B51 { get; init; }

    [JsonPropertyName("insider_name")]
    public required string InsiderName { get; init; }

    [JsonPropertyName("insider_title")]
    public required string InsiderTitle { get; init; }

    [JsonPropertyName("is_officer")]
    public required bool IsOfficer { get; init; }

    [JsonPropertyName("is_director")]
    public required bool IsDirector { get; init; }

    [JsonPropertyName("is_ten_percent_owner")]
    public required bool IsTenPercentOwner { get; init; }

    /// <summary>
    /// Date of the group's last fill (a ladder can span days).
    /// </summary>
    [JsonPropertyName("transaction_date")]
    public required DateTimeOffset TransactionDate { get; init; }

    /// <summary>
    /// When EDGAR accepted the filing (UTC). Compare against <c>transaction_date</c> for your own lateness rule.
    /// </summary>
    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    /// <summary>
    /// The filing missed the SEC's two-business-day deadline (Rule 16a-3(g)). Computed on Eastern dates, since EDGAR accepts filings until ~22:00 ET, and with one weekday of slack so a trade in a holiday week is not flagged: true when more than three weekday-days separate <c>transaction_date</c> from the filing. About 3% of events carry it; the long tail is catch-up filings covering trades from years earlier.
    /// </summary>
    [JsonPropertyName("late_filing")]
    public required bool LateFiling { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
