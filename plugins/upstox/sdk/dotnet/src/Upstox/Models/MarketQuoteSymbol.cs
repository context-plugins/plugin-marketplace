using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MarketQuoteSymbol
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ohlc")]
    public Ohlc? Ohlc { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("depth")]
    public DepthMap? Depth { get; init; }

    /// <summary>
    /// Time in milliseconds at which the feeds was updated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    /// <summary>
    /// Key issued by Upstox for the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("symbol")]
    public string? Symbol { get; init; }

    /// <summary>
    /// The last traded price of symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price")]
    public double? LastPrice { get; init; }

    /// <summary>
    /// The volume traded today on symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("volume")]
    public long? Volume { get; init; }

    /// <summary>
    /// Average price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// Total number of outstanding contracts held by market participants exchange-wide (only F&amp;O)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oi")]
    public double? Oi { get; init; }

    /// <summary>
    /// The absolute change from yesterday's close to last traded price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("net_change")]
    public double? NetChange { get; init; }

    /// <summary>
    /// The total number of bid quantity available for trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_buy_quantity")]
    public double? TotalBuyQuantity { get; init; }

    /// <summary>
    /// The total number of ask quantity available for trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_sell_quantity")]
    public double? TotalSellQuantity { get; init; }

    /// <summary>
    /// The lower circuit of symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lower_circuit_limit")]
    public double? LowerCircuitLimit { get; init; }

    /// <summary>
    /// The upper circuit of symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upper_circuit_limit")]
    public double? UpperCircuitLimit { get; init; }

    /// <summary>
    /// Time in milliseconds at which last trade happened
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_trade_time")]
    public string? LastTradeTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oi_day_high")]
    public double? OiDayHigh { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oi_day_low")]
    public double? OiDayLow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
