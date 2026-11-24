using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Gemini response data
/// </summary>
public record Result1
{
    /// <summary>
    /// Gemini's response text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// Gemini's response in Markdown format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// A URL to the full HTML of the response. Expires 24 hours after generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public string? Html { get; init; }

    /// <summary>
    /// Sources cited by Gemini
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source1>? Sources { get; init; }

    /// <summary>
    /// Inline citation pills extracted from the Gemini answer. Each entry is one (pill, source) pair: when a chip cites N sources (Gemini's <c>+N</c> analog or section-summary chips), the array contains N entries sharing the same <c>citationPillId</c> but with per-source <c>label</c>, <c>url</c>, and <c>domain</c>. Group by <c>citationPillId</c> to recover the pill-level structure. <c>label</c> is always present on the wire; it can be an empty string when the rail has no title for a source. Omitted from <c>result</c> when the answer carries no pills.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill1>? CitationPills { get; init; }

    /// <summary>
    /// Place cards returned for lodging and local answers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public IReadOnlyList<Place>? Places { get; init; }

    /// <summary>
    /// Product cards Gemini shows on shopping answers, in display order. Field names follow AI Mode's <c>shoppingCards</c>. Omitted from <c>result</c> when the answer carries no product cards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shoppingCards")]
    public IReadOnlyList<ShoppingCard1>? ShoppingCards { get; init; }

    /// <summary>
    /// Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without notice — use it for debugging or to access data not yet surfaced in the structured fields above.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public IReadOnlyList<object>? RawResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
