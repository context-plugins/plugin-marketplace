using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record ShoppingCard8
{
    /// <summary>
    /// Product title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Price as displayed. <c>raw</c> is always present; <c>value</c> and <c>currency</c> are omitted when they can't be parsed, never sent as <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price6? Price { get; init; }

    /// <summary>
    /// Merchant/store name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store")]
    public string? Store { get; init; }

    /// <summary>
    /// Product rating
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Review count
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public string? Reviews { get; init; }

    /// <summary>
    /// Product image
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    [Format(FormatKind.Uri)]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// Direct product URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productLink")]
    [Format(FormatKind.Uri)]
    public string? ProductLink { get; init; }

    /// <summary>
    /// Token for <see href="/api-reference/endpoint/google/product"><c>POST /v1/monitor/google/product</c></see>, which returns the product panel that this product opens. Expires five minutes after the scrape. Present only when the product links to a Google product panel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productResultToken")]
    public string? ProductResultToken { get; init; }

    /// <summary>
    /// Google's ID for the product, read from <c>productLink</c>. The same product has the same value in <c>shoppingCards</c>, <c>inlineProducts</c> and <c>productResults</c> of one response. Google can change the value between responses, so do not use it to identify a product over time. Absent when the link from Google has no ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productDocid")]
    public string? ProductDocid { get; init; }

    /// <summary>
    /// Original price before discount. Same shape as <c>price</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oldPrice")]
    public OldPrice4? OldPrice { get; init; }

    /// <summary>
    /// Product description snippet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snippet")]
    public string? Snippet { get; init; }

    /// <summary>
    /// Links found within the product snippet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snippetLinks")]
    public IReadOnlyList<SnippetLink1>? SnippetLinks { get; init; }

    /// <summary>
    /// 1-indexed rank across the <c>shoppingCards</c> array in DOM/render order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
