using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

public record TickerInsiderSummary
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("days")]
    public required int Days { get; init; }

    [JsonPropertyName("total_transactions")]
    public required int TotalTransactions { get; init; }

    [JsonPropertyName("buy_count")]
    public required int BuyCount { get; init; }

    [JsonPropertyName("sell_count")]
    public required int SellCount { get; init; }

    /// <summary>
    /// Decimal string in USD; null when the window has no buys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_value_usd")]
    public string? BuyValueUsd { get; init; }

    /// <summary>
    /// Decimal string in USD; null when the window has no sells.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_value_usd")]
    public string? SellValueUsd { get; init; }

    /// <summary>
    /// Share of transactions executed under a pre-arranged 10b5-1 plan, in percent.
    /// </summary>
    [JsonPropertyName("pct_10b5_1")]
    [Minimum(0)]
    [Maximum(100)]
    public required int Pct10B51 { get; init; }

    [JsonPropertyName("top_insiders")]
    public required IReadOnlyList<TopInsider> TopInsiders { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
