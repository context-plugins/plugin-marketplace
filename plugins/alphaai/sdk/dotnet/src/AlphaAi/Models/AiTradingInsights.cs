using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record AiTradingInsights
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker_analysis")]
    public IReadOnlyList<TickerAnalysis>? TickerAnalysis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_trading_value")]
    public NewsTradingValue? NewsTradingValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indirect_market_effects")]
    public IndirectMarketEffects? IndirectMarketEffects { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternative_perspectives")]
    public AlternativePerspectives? AlternativePerspectives { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
