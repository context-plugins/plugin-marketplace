using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record PlaceOrderRequest
{
    /// <summary>
    /// Quantity with which the order is to be placed
    /// </summary>
    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    /// <summary>
    /// Signifies if the order was either Intraday, Delivery, CO or OCO
    /// </summary>
    [JsonPropertyName("product")]
    public required ProductOpenApiDefinitionOrderApi Product { get; init; }

    /// <summary>
    /// It can be one of the following - DAY(default), IOC
    /// </summary>
    [JsonPropertyName("validity")]
    public required Validity Validity { get; init; }

    /// <summary>
    /// Price at which the order will be placed
    /// </summary>
    [JsonPropertyName("price")]
    public required double Price { get; init; }

    /// <summary>
    /// Tag for a particular order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public string? Tag { get; init; }

    /// <summary>
    /// Key of the instrument
    /// </summary>
    [JsonPropertyName("instrument_token")]
    public required string InstrumentToken { get; init; }

    /// <summary>
    /// Type of order. It can be one of the following
    /// MARKET refers to market order
    /// LIMIT refers to Limit Order
    /// SL refers to Stop Loss Limit
    /// SL-M refers to Stop Loss Market
    /// </summary>
    [JsonPropertyName("order_type")]
    public required OrderTypeOpenApiDefinitionOrderApi OrderType { get; init; }

    /// <summary>
    /// Indicates whether its a buy or sell order
    /// </summary>
    [JsonPropertyName("transaction_type")]
    public required TransactionType TransactionType { get; init; }

    /// <summary>
    /// The quantity that should be disclosed in the market depth
    /// </summary>
    [JsonPropertyName("disclosed_quantity")]
    public required int DisclosedQuantity { get; init; }

    /// <summary>
    /// If the order is a stop loss order then the trigger price to be set is mentioned here
    /// </summary>
    [JsonPropertyName("trigger_price")]
    public required double TriggerPrice { get; init; }

    /// <summary>
    /// Signifies if the order is an After Market Order
    /// </summary>
    [JsonPropertyName("is_amo")]
    public required bool IsAmo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
