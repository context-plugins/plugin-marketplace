using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record TradeData
{
    /// <summary>
    /// Exchange to which the order is associated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public ExchangeOpenApiDefinitionOrderApi? Exchange { get; init; }

    /// <summary>
    /// Shows if the order was either Intraday, Delivery, CO or OCO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public Product4? Product { get; init; }

    /// <summary>
    /// Shows the trading symbol which could be a combination of symbol name, instrument, expiry date etc
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tradingsymbol")]
    public string? Tradingsymbol { get; init; }

    /// <summary>
    /// Shows the trading symbol which could be a combination of symbol name, instrument, expiry date etc
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trading_symbol")]
    public string? TradingSymbol { get; init; }

    /// <summary>
    /// Identifier issued by Upstox used for subscribing to live market quotes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    /// <summary>
    /// Type of order. It can be one of the following
    /// MARKET refers to market order&lt;br&gt;LIMIT refers to Limit Order&lt;br&gt;SL refers to Stop Loss Limit&lt;br&gt;SL-M refers to Stop loss market
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_type")]
    public OrderType1? OrderType { get; init; }

    /// <summary>
    /// Indicates whether the order was a buy or sell order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction_type")]
    public TransactionType1? TransactionType { get; init; }

    /// <summary>
    /// The total quantity traded from this particular order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    /// <summary>
    /// Unique order ID assigned by the exchange for the order placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange_order_id")]
    public string? ExchangeOrderId { get; init; }

    /// <summary>
    /// Unique order ID assigned internally for the order placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    /// <summary>
    /// User readable time at when the trade occurred
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange_timestamp")]
    public string? ExchangeTimestamp { get; init; }

    /// <summary>
    /// Price at which the traded quantity is traded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// Trade ID generated from exchange towards traded transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trade_id")]
    public string? TradeId { get; init; }

    /// <summary>
    /// The order reference ID for which the order must be modified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_ref_id")]
    public string? OrderRefId { get; init; }

    /// <summary>
    /// User readable timestamp at which the order was placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_timestamp")]
    public string? OrderTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
