using System;
using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record PricingInfo
{
    /// <summary>
    /// Current observed bid. Zero/unavailable source values are normalized to null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_bid_usd")]
    public double? CurrentBidUsd { get; init; }

    /// <summary>
    /// Buy Now amount; unavailable/zero source placeholders are null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_now_usd")]
    public double? BuyNowUsd { get; init; }

    /// <summary>
    /// Canonical persisted final/approval price when positive; unavailable/zero source placeholders are null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_price_usd")]
    public double? SalePriceUsd { get; init; }

    /// <summary>
    /// Source-backed observation timestamp for current_bid_usd when a matching bid event for the current auction cycle was captured. Null when no matching source timestamp exists; never inferred from generic vehicle updated_at.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_bid_at")]
    public DateTimeOffset? CurrentBidAt { get; init; }

    /// <summary>
    /// Legacy secondary source bid field. Zero/unavailable values are normalized to null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_bid2_usd")]
    public double? CurrentBid2Usd { get; init; }

    /// <summary>
    /// Persisted last known positive sale price; unavailable/zero source placeholders are null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_sold_price_usd")]
    public double? LastSoldPriceUsd { get; init; }

    /// <summary>
    /// Copart Estimated Retail Value (ERV) when the Copart source provides a positive value. Null for IAAI and for Copart records where ERV is unavailable or zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimated_retail_value_usd")]
    public double? EstimatedRetailValueUsd { get; init; }

    /// <summary>
    /// Apibara robust historical final-sale estimate. Exact make + model + model year + primary damage Q1-Q3 is the base and fewer than 3 exact final-sale comparables yields null. Copart Sold on Approval / On Approval is excluded. When sufficient final sales exist, engine + mileage-band (or engine-only) market-value refinement adjusts high/low-trim vehicles. The most recent retained non-final bid for the same lot may be exposed as previous_high_bid_usd strictly as context and never changes the Q1-Q3 range or median. Distinct from Copart estimated_retail_value_usd.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimated_cost")]
    public EstimatedCost? EstimatedCost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
