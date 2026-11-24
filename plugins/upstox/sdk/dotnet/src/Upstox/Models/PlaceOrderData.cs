using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record PlaceOrderData
{
    /// <summary>
    /// An order ID for the order request placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
