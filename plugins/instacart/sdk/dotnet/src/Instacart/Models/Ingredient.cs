using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record Ingredient
{
    /// <summary>
    /// The name of the ingredient.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Custom display text for the ingredient on the recipe page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_text")]
    public string? DisplayText { get; init; }

    /// <summary>
    /// Instacart product identifiers to match specific products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_ids")]
    public IReadOnlyList<string>? ProductIds { get; init; }

    /// <summary>
    /// Universal Product Codes to match specific products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upcs")]
    public IReadOnlyList<string>? Upcs { get; init; }

    /// <summary>
    /// Measurement details for the ingredient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("measurements")]
    public Measurements? Measurements { get; init; }

    /// <summary>
    /// Filters to narrow product matching for this ingredient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public Filters1? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
