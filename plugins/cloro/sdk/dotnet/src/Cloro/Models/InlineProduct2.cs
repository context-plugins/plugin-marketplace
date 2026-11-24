using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.Enums;

namespace Cloro.Models;

/// <summary>
/// Inline product reference that appeared in the response text, or a product card of a gpt-6 answer, including pricing and offers
/// </summary>
public record InlineProduct2
{
    /// <summary>
    /// Individual product information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public ShoppingProduct2? Product { get; init; }

    /// <summary>
    /// How the product is rendered in the response. Absent for a gpt-6 product card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("render_as")]
    public RenderAs1? RenderAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
