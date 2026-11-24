using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MarketQuoteOhlcv3
{
    /// <summary>
    /// The last traded price of symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price")]
    public double? LastPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prev_ohlc")]
    public OhlcV3? PrevOhlc { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("live_ohlc")]
    public OhlcV3? LiveOhlc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
