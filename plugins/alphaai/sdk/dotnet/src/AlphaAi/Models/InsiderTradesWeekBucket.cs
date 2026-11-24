using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record InsiderTradesWeekBucket
{
    /// <summary>
    /// Monday of the ISO week.
    /// </summary>
    [JsonPropertyName("week_start")]
    public required DateTimeOffset WeekStart { get; init; }

    [JsonPropertyName("buy_count")]
    public required int BuyCount { get; init; }

    [JsonPropertyName("sell_count")]
    public required int SellCount { get; init; }

    [JsonPropertyName("buy_value_usd")]
    public required string BuyValueUsd { get; init; }

    [JsonPropertyName("sell_value_usd")]
    public required string SellValueUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
