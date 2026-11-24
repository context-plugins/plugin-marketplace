using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreateOrderLineAttributeRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    [JsonPropertyName("pricing")]
    public required CreateOrderLineAttributeRequestPricing Pricing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
