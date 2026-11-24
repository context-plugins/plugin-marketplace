using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record Ohlc
{
    /// <summary>
    /// The open price of the trading session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("open")]
    public double? Open { get; init; }

    /// <summary>
    /// The high price of the trading session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("high")]
    public double? High { get; init; }

    /// <summary>
    /// The low price of the trading session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("low")]
    public double? Low { get; init; }

    /// <summary>
    /// The close price of the symbol from the previous session of trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close")]
    public double? Close { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
