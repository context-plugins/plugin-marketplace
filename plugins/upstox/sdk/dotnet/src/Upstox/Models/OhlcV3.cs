using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record OhlcV3
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

    /// <summary>
    /// The volume of the symbol traded in the session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("volume")]
    public long? Volume { get; init; }

    /// <summary>
    /// Starting timestamp of candle
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ts")]
    public long? Ts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
