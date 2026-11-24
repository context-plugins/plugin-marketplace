using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record CreateOrderRequest
{
    /// <summary>
    /// The identifier of the time slot hold from the reserve step.
    /// </summary>
    [JsonPropertyName("hold_id")]
    public required string HoldId { get; init; }

    /// <summary>
    /// The finalized cart for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cart")]
    public Cart1? Cart { get; init; }

    /// <summary>
    /// The delivery address for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery_address")]
    public DeliveryAddress? DeliveryAddress { get; init; }

    /// <summary>
    /// Special instructions for the delivery driver.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery_instructions")]
    public string? DeliveryInstructions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
