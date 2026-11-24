using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record OrderData
{
    /// <summary>
    /// Exchange to which the order is associated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public ExchangeOpenApiDefinitionOrderApi? Exchange { get; init; }

    /// <summary>
    /// Price at which the order was placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public double? Price { get; init; }

    /// <summary>
    /// Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public Product1? Product { get; init; }

    /// <summary>
    /// Quantity with which the order was placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    /// <summary>
    /// Indicates the current status of the order. Valid order status’ are outlined in the table below
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Tag to uniquely identify an order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public string? Tag { get; init; }

    /// <summary>
    /// Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validity")]
    public Validity1? Validity { get; init; }

    /// <summary>
    /// Average price at which the qty got traded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// The quantity that should be disclosed in the market depth
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disclosed_quantity")]
    public int? DisclosedQuantity { get; init; }

    /// <summary>
    /// Unique order ID assigned by the exchange for the order placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange_order_id")]
    public string? ExchangeOrderId { get; init; }

    /// <summary>
    /// User readable time at which the order was placed or updated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange_timestamp")]
    public string? ExchangeTimestamp { get; init; }

    /// <summary>
    /// Identifier issued by Upstox used for subscribing to live market quotes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    /// <summary>
    /// Signifies if the order is an After Market Order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_amo")]
    public bool? IsAmo { get; init; }

    /// <summary>
    /// Indicates the reason when any order is rejected, not modified or cancelled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_message")]
    public string? StatusMessage { get; init; }

    /// <summary>
    /// Unique order ID assigned internally for the order placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    /// <summary>
    /// Apart from 1st order it shows the count of how many requests were sent
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_request_id")]
    public string? OrderRequestId { get; init; }

    /// <summary>
    /// Type of order. It can be one of the following
    /// MARKET refers to market order&lt;br&gt;LIMIT refers to Limit Order&lt;br&gt;SL refers to Stop Loss Limit&lt;br&gt;SL-M refers to Stop loss market
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_type")]
    public OrderType1? OrderType { get; init; }

    /// <summary>
    /// In case the order is part of the second or third leg of a CO or OCO, the parent order ID is indicated here
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_order_id")]
    public string? ParentOrderId { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tradingsymbol")]
    public string? Tradingsymbol { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trading_symbol")]
    public string? TradingSymbol { get; init; }

    /// <summary>
    /// User readable timestamp at which the order was placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_timestamp")]
    public string? OrderTimestamp { get; init; }

    /// <summary>
    /// The total quantity traded from this particular order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filled_quantity")]
    public int? FilledQuantity { get; init; }

    /// <summary>
    /// Indicates whether the order was a buy or sell order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction_type")]
    public TransactionType1? TransactionType { get; init; }

    /// <summary>
    /// If the order was a stop loss order then the trigger price set is mentioned here
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_price")]
    public double? TriggerPrice { get; init; }

    /// <summary>
    /// Uniquely identifies the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placed_by")]
    public string? PlacedBy { get; init; }

    /// <summary>
    /// Order complexity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variety")]
    public string? Variety { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
