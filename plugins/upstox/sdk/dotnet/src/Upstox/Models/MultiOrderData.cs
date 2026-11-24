using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MultiOrderData
{
    /// <summary>
    /// A unique identifier for tracking individual orders within the batch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("correlation_id")]
    public string? CorrelationId { get; init; }

    /// <summary>
    /// An order ID for the order request placed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
