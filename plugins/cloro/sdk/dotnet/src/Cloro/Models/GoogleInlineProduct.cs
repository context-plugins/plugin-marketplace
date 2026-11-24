using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record GoogleInlineProduct
{
    /// <summary>
    /// Product title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// 1-indexed rank across the <c>inlineProducts</c> array in DOM/render order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    /// <summary>
    /// Price as displayed. Fields that can't be parsed are omitted, never sent as <c>null</c>. When Google supplies structured price data, <c>currency</c> is an ISO code (<c>USD</c>) and <c>raw</c> appears only if the page also showed the price text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price8? Price { get; init; }

    /// <summary>
    /// Original price before discount. Same shape as <c>price</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oldPrice")]
    public OldPrice5? OldPrice { get; init; }

    /// <summary>
    /// Merchant/store name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store")]
    public string? Store { get; init; }

    /// <summary>
    /// Average rating out of 5, from Google's product data. Absent when Google shows no rating.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Product image URL
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
