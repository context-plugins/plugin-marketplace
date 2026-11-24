using System;
using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models;

public record AuctionInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auction_at")]
    public DateTimeOffset? AuctionAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_status")]
    public string? LotStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_sub_status")]
    public string? LotSubStatus { get; init; }

    /// <summary>
    /// Last known sale-outcome day. Placeholder dates before year 2000 are normalized to null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_sold_day")]
    public DateTimeOffset? LastSoldDay { get; init; }

    /// <summary>
    /// Exact source-backed sale/outcome observation timestamp when available. Null when only a day-level sale date is known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_sold_at")]
    public DateTimeOffset? LastSoldAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_sold_status")]
    public string? LastSoldStatus { get; init; }

    /// <summary>
    /// Explicit normalized outcome only; elapsed time alone is not treated as a sale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome_status")]
    public OutcomeStatus? OutcomeStatus { get; init; }

    /// <summary>
    /// Best known completed-auction/outcome timestamp. Prefers source-backed sale/outcome evidence; otherwise may use a past scheduled auction timestamp. Never uses a future schedule as an ended timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auction_ended_at")]
    public DateTimeOffset? AuctionEndedAt { get; init; }

    /// <summary>
    /// Timestamp when the current outcome was observed/persisted. Prefers source-backed sale evidence; falls back to the persisted vehicle update timestamp when exact source timing is unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome_observed_at")]
    public DateTimeOffset? OutcomeObservedAt { get; init; }

    /// <summary>
    /// Source/parser evidence that the lot was removed from active inventory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_removed")]
    public bool? LotRemoved { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sold_buy_now")]
    public bool? SoldBuyNow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sold_timed")]
    public bool? SoldTimed { get; init; }

    /// <summary>
    /// True when the imported active lot has no assigned auction date. auction_at and ad are null. Explicit auction-date filters exclude these records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auction_date_pending")]
    public bool? AuctionDatePending { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
