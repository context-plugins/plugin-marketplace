using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// AI Mode response data
/// </summary>
public record Result5
{
    /// <summary>
    /// AI Mode's response text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// A URL to the full HTML of the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    [Format(FormatKind.Uri)]
    public string? Html { get; init; }

    /// <summary>
    /// Array of sources referenced in the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source7>? Sources { get; init; }

    /// <summary>
    /// Inline citation pills extracted from the AI Mode answer. Each entry is one (pill, source) pair: when a pill cites N sources (Google's <c>[Label +N]</c> chips), the array contains N entries sharing the same <c>citationPillId</c> but carrying per-source <c>label</c>, <c>url</c>, and <c>domain</c>. Group by <c>citationPillId</c> to recover the pill-level structure. Omitted from <c>result</c> when the answer carries no pills.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill4>? CitationPills { get; init; }

    /// <summary>
    /// AI Mode's response formatted in Markdown (included when include.markdown is true). Converted from Google's live page, so element order can shift as Google updates its markup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Inline place cards extracted from the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public IReadOnlyList<GooglePlace>? Places { get; init; }

    /// <summary>
    /// Shopping product information extracted from the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shoppingCards")]
    public IReadOnlyList<ShoppingCard4>? ShoppingCards { get; init; }

    /// <summary>
    /// Sponsored ad section extracted from the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public Ads? Ads { get; init; }

    /// <summary>
    /// Inline product cards found within the AI response text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inlineProducts")]
    public IReadOnlyList<InlineProduct1>? InlineProducts { get; init; }

    /// <summary>
    /// Inline video cards embedded in the AI response (currently YouTube)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videos")]
    public IReadOnlyList<Video1>? Videos { get; init; }

    /// <summary>
    /// GPS-enriched location data extracted from the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("map")]
    public IReadOnlyList<GoogleMapPlace>? Map { get; init; }

    /// <summary>
    /// Merchant offers per product cluster, up to 6. Returned only when <c>include.expandProducts</c> is true. See <see href="/api-reference/endpoint/aimode/product-results">product results</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productResults")]
    public IReadOnlyList<ProductResult>? ProductResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
