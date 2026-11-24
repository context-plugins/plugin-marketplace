using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// One product cluster and its merchant offers. Only <c>title</c> is guaranteed; anything Google's panel lacks is omitted, never sent as <c>null</c>.
/// </summary>
public record ProductResult2
{
    /// <summary>
    /// Product cluster title, as Google displayed it. Empty when the page has no product heading.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Merchant offers. Always present on Google Search entries; omitted on AI Mode when Google lists none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stores")]
    public IReadOnlyList<Store1>? Stores { get; init; }

    /// <summary>
    /// Google's description of the product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aboutTheProduct")]
    public AboutTheProduct? AboutTheProduct { get; init; }

    /// <summary>
    /// Spec tables: each category name maps to key/value pairs. Category names and keys arrive in the response language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specifications")]
    public IReadOnlyDictionary<string, string>? Specifications { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<Image1>? Images { get; init; }

    /// <summary>
    /// Product rating
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Product review count
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public string? Reviews { get; init; }

    /// <summary>
    /// Product variants Google offers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variants")]
    public IReadOnlyList<object>? Variants { get; init; }

    /// <summary>
    /// User reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userReviews")]
    public IReadOnlyList<object>? UserReviews { get; init; }

    /// <summary>
    /// Related products
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relatedProducts")]
    public IReadOnlyList<object>? RelatedProducts { get; init; }

    /// <summary>
    /// Google's ID for the product, equal to the <c>productDocid</c> of the shopping card or inline product that this entry came from. Present only when the product came from a Google AI Mode shopping card or inline product. A product from a Google Search shopping card does not have it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productDocid")]
    public string? ProductDocid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
