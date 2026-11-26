using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// One Form 4 economic event, same folding as the feed's <c>InsiderEvent</c> (a filing's whole tranche group: <c>shares</c> and <c>total_value_usd</c> are group sums, <c>avg_price_usd</c> is value-weighted over priced tranches, money and share fields are decimal STRINGS). Differences from the feed block: <c>side</c> here is only <c>buy</c> or <c>sell</c> (D counts as sell, see the endpoint description), and each event adds its stake impact, tranche count and the link to our enriched article.
/// </summary>
public record InsiderTradeEvent
{
    /// <summary>
    /// Value-flow label; <c>transaction_code</c> carries the raw code.
    /// </summary>
    [JsonPropertyName("side")]
    public required SideAlphAiRestSymbolsApi Side { get; init; }

    /// <summary>
    /// Raw SEC Form 4 transaction code (<c>P</c>, <c>S</c>, <c>D</c>).
    /// </summary>
    [JsonPropertyName("transaction_code")]
    public required string TransactionCode { get; init; }

    /// <summary>
    /// Direct or indirect holding pool.
    /// </summary>
    [JsonPropertyName("ownership_form")]
    public required OwnershipFormAlphAiRestSymbolsApi OwnershipForm { get; init; }

    /// <summary>
    /// Security class from the filing; empty when unreported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_title")]
    public string? SecurityTitle { get; init; }

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
    /// Fills folded into this event (a 10b5-1 ladder files many).
    /// </summary>
    [JsonPropertyName("tranche_count")]
    public required int TrancheCount { get; init; }

    /// <summary>
    /// Percent of the pre-event position this event moved, as a decimal string; sells are negative ("-26.0" = sold 26% of the stake). <c>null</c> when the pre-event position cannot be reconstructed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stake_change_pct")]
    public string? StakeChangePct { get; init; }

    /// <summary>
    /// True when any tranche executed under a pre-arranged 10b5-1 plan.
    /// </summary>
    [JsonPropertyName("is_10b5_1")]
    public required bool Is10B51 { get; init; }

    /// <summary>
    /// The filing missed the SEC's two-business-day deadline, computed the same way as the feed's <c>InsiderEvent.late_filing</c>.
    /// </summary>
    [JsonPropertyName("late_filing")]
    public required bool LateFiling { get; init; }

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
    /// When EDGAR accepted the filing (UTC).
    /// </summary>
    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    /// <summary>
    /// Uid of the enriched news row fronting this event; matches <c>original.uid</c> in the feeds.
    /// </summary>
    [JsonPropertyName("news_uid")]
    public required string NewsUid { get; init; }

    [JsonPropertyName("news_title")]
    public required string NewsTitle { get; init; }

    /// <summary>
    /// Publish time of the fronting news row.
    /// </summary>
    [JsonPropertyName("news_published")]
    public required DateTimeOffset NewsPublished { get; init; }

    /// <summary>
    /// Whether the alphai.io article page for <c>news_uid</c> exists. Events ingested by the historical backfill have no enriched article; render those without a link.
    /// </summary>
    [JsonPropertyName("has_article")]
    public required bool HasArticle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
