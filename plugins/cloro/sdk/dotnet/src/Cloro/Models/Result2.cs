using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Perplexity response data
/// </summary>
public record Result2
{
    /// <summary>
    /// Perplexity's response text
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
    public IReadOnlyList<Source>? Sources { get; init; }

    /// <summary>
    /// Inline citation pills extracted from the Perplexity answer. Each entry is one (pill, source) pair: when a pill cites N sources (Perplexity's <c>[1][2][3]</c> bracketed groups), the array contains N entries sharing the same <c>citationPillId</c> but carrying per-source <c>label</c>, <c>url</c>, and <c>domain</c>. Group by <c>citationPillId</c> to recover the pill-level structure. Omitted from <c>result</c> when the answer carries no pills.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill2>? CitationPills { get; init; }

    /// <summary>
    /// Perplexity's response formatted in Markdown (included when include.markdown is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Suggested follow-up search queries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("related_queries")]
    public IReadOnlyList<string>? RelatedQueries { get; init; }

    /// <summary>
    /// Video content found in response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videos")]
    public IReadOnlyList<MediaItem>? Videos { get; init; }

    /// <summary>
    /// Image content found in response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<MediaItem>? Images { get; init; }

    /// <summary>
    /// Hotel listings (when travel intent detected)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hotels")]
    public IReadOnlyList<HotelItem>? Hotels { get; init; }

    /// <summary>
    /// General places and locations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public IReadOnlyList<PlaceItem>? Places { get; init; }

    /// <summary>
    /// Shopping product cards with detailed product information (when shopping intent detected)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shopping_cards")]
    public IReadOnlyList<ShoppingCard2>? ShoppingCards { get; init; }

    /// <summary>
    /// Internal search queries used to generate response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_model_queries")]
    public IReadOnlyList<string>? SearchModelQueries { get; init; }

    /// <summary>
    /// Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without notice — use it for debugging or to access data not yet surfaced in the structured fields above.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public IReadOnlyList<object>? RawResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
