using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

/// <summary>
/// Details about the replacement product suggested by the shopper.
/// </summary>
public record Replacement
{
    /// <summary>
    /// The name of the replacement product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_name")]
    public string? ProductName { get; init; }

    /// <summary>
    /// The product identifier of the replacement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_id")]
    public string? ProductId { get; init; }

    /// <summary>
    /// The quantity of the replacement product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
