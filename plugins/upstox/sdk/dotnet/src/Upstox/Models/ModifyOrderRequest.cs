using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record ModifyOrderRequest
{
    /// <summary>
    /// Quantity with which the order was placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    /// <summary>
    /// Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)
    /// </summary>
    [JsonPropertyName("validity")]
    public required Validity5 Validity { get; init; }

    /// <summary>
    /// Price at which the order was placed
    /// </summary>
    [JsonPropertyName("price")]
    public required double Price { get; init; }

    /// <summary>
    /// The order ID for which the order must be modified
    /// </summary>
    [JsonPropertyName("order_id")]
    public required string OrderId { get; init; }

    /// <summary>
    /// Type of order. It can be one of the following
    /// MARKET refers to market order
    /// LIMILT refers to Limit Order
    /// SL refers to Stop Loss Limit
    /// SL-M refers to Stop Loss Market
    /// </summary>
    [JsonPropertyName("order_type")]
    public required OrderType6 OrderType { get; init; }

    /// <summary>
    /// The quantity that should be disclosed in the market depth
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disclosed_quantity")]
    public int? DisclosedQuantity { get; init; }

    /// <summary>
    /// If the order is a stop loss order then the trigger price to be set is mentioned here
    /// </summary>
    [JsonPropertyName("trigger_price")]
    public required double TriggerPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
