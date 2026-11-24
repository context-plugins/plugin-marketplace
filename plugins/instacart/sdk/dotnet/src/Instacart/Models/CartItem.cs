using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record CartItem
{
    /// <summary>
    /// The Universal Product Code of the item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upc")]
    public string? Upc { get; init; }

    /// <summary>
    /// The quantity of the item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    [Minimum(1)]
    public int? Quantity { get; init; }

    /// <summary>
    /// The Instacart product identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_id")]
    public string? ProductId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
