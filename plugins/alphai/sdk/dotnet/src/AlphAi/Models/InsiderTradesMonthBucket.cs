using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record InsiderTradesMonthBucket
{
    /// <summary>
    /// Calendar month, <c>YYYY-MM</c>.
    /// </summary>
    [JsonPropertyName("month")]
    public required string Month { get; init; }

    [JsonPropertyName("buy_count")]
    public required int BuyCount { get; init; }

    [JsonPropertyName("sell_count")]
    public required int SellCount { get; init; }

    /// <summary>
    /// Decimal string in USD; <c>"0"</c> for a quiet side.
    /// </summary>
    [JsonPropertyName("buy_value_usd")]
    public required string BuyValueUsd { get; init; }

    [JsonPropertyName("sell_value_usd")]
    public required string SellValueUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
