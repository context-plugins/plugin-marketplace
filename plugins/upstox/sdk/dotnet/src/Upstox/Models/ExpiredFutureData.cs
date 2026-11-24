using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record ExpiredFutureData
{
    /// <summary>
    /// Name of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Segment of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segment")]
    public string? Segment { get; init; }

    /// <summary>
    /// Exchange of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public string? Exchange { get; init; }

    /// <summary>
    /// Expiry date of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiry")]
    public string? Expiry { get; init; }

    /// <summary>
    /// Unique key identifying the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_key")]
    public string? InstrumentKey { get; init; }

    /// <summary>
    /// Token assigned by the exchange
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange_token")]
    public string? ExchangeToken { get; init; }

    /// <summary>
    /// Symbol used for trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trading_symbol")]
    public string? TradingSymbol { get; init; }

    /// <summary>
    /// Minimum price movement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tick_size")]
    public double? TickSize { get; init; }

    /// <summary>
    /// Number of units per lot
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lot_size")]
    public long? LotSize { get; init; }

    /// <summary>
    /// Type of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_type")]
    public string? InstrumentType { get; init; }

    /// <summary>
    /// Maximum allowed quantity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freeze_quantity")]
    public double? FreezeQuantity { get; init; }

    /// <summary>
    /// Key of the underlying asset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("underlying_key")]
    public string? UnderlyingKey { get; init; }

    /// <summary>
    /// Type of the underlying asset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("underlying_type")]
    public string? UnderlyingType { get; init; }

    /// <summary>
    /// Symbol of the underlying asset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("underlying_symbol")]
    public string? UnderlyingSymbol { get; init; }

    /// <summary>
    /// Minimum lot size
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimum_lot")]
    public long? MinimumLot { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
