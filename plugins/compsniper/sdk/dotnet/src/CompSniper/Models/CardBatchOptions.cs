using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record CardBatchOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ebaySite")]
    public EbaySite? EbaySite { get; init; }

    /// <summary>
    /// Maximum sold comps inspected per card. Compact output is capped at 60.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    [Minimum(1)]
    [Maximum(240)]
    public int? Count { get; init; } = 60;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemCondition")]
    public ItemCondition? ItemCondition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("soldAfter")]
    public DateTimeOffset? SoldAfter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("soldBefore")]
    public DateTimeOffset? SoldBefore { get; init; }

    /// <summary>
    /// Remove eBay's explicit Results matching fewer words section for each card search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exactMatch")]
    public bool? ExactMatch { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relevance")]
    public bool? Relevance { get; init; } = true;

    /// <summary>
    /// compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to 25 cards with count &lt;= 60.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputMode")]
    public OutputMode? OutputMode { get; init; } = OutputMode.Summary;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
