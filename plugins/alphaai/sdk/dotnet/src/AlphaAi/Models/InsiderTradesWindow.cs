using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

/// <summary>
/// Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower than the transaction counts of <c>/api/symbols/{ticker}/insider-summary/</c>.
/// </summary>
public record InsiderTradesWindow
{
    [JsonPropertyName("buy_count")]
    public required int BuyCount { get; init; }

    [JsonPropertyName("sell_count")]
    public required int SellCount { get; init; }

    /// <summary>
    /// Decimal string in USD; null when the window has no priced buys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_value_usd")]
    public string? BuyValueUsd { get; init; }

    /// <summary>
    /// Decimal string in USD; null when the window has no priced sells.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_value_usd")]
    public string? SellValueUsd { get; init; }

    /// <summary>
    /// Distinct reporting owners in the window.
    /// </summary>
    [JsonPropertyName("unique_insiders")]
    public required int UniqueInsiders { get; init; }

    /// <summary>
    /// Share of the window's events executed under a pre-arranged 10b5-1 plan, in percent.
    /// </summary>
    [JsonPropertyName("pct_10b5_1")]
    [Minimum(0)]
    [Maximum(100)]
    public required int Pct10B51 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
