using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.Enums;

namespace Cloro.Models;

/// <summary>
/// Inline product reference that appeared in the response text, including pricing and offers
/// </summary>
public record InlineProduct
{
    /// <summary>
    /// Individual product information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public ShoppingProduct? Product { get; init; }

    /// <summary>
    /// How the product is rendered in the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("render_as")]
    public RenderAs? RenderAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
