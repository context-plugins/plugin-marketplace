using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Models.Enums;

namespace Instacart.Models;

public record OrderHandlingResponse
{
    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    /// <summary>
    /// The current status of the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusInstacartConnectPostCheckoutOrdersApi? Status { get; init; }

    /// <summary>
    /// The delivery or pickup address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// The geographic coordinates of the delivery or pickup address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coordinates")]
    public Coordinates? Coordinates { get; init; }

    /// <summary>
    /// Information about the current shopper assigned to the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shopper")]
    public Shopper? Shopper { get; init; }

    /// <summary>
    /// Any delivery or pickup instructions included with the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
