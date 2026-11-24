using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Mutually exclusive with orderId. Provide at most one.
/// </summary>
public record SyncValueReceiptRequestProduct
{
    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
