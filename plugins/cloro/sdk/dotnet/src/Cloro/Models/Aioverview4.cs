using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
/// </summary>
public record Aioverview4
{
    /// <summary>
    /// Sources referenced in the AI Overview
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source10>? Sources { get; init; }

    /// <summary>
    /// Inline citation pills extracted from the AI Overview answer. Each entry is one (pill, source) pair: when a pill cites N sources (Google's <c>[Label +N]</c> chips), the array contains N entries sharing the same <c>citationPillId</c> but carrying per-source <c>label</c>, <c>url</c>, and <c>domain</c>. Group by <c>citationPillId</c> to recover the pill-level structure. Omitted from <c>result.aioverview</c> when the answer carries no pills.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill6>? CitationPills { get; init; }

    /// <summary>
    /// A citation chip's "View related links" flyout items — URLs Google groups under the chip that are NOT in the <c>sources</c> rail (for example a Google Shopping comparison link). Each entry shares the <c>citationPillId</c> of its chip so it can be grouped with that chip's <c>citationPills</c>, but carries no <c>position</c> (a related link is absent from <c>sources</c>). Related links also render inline in <c>markdown</c>, so <c>markdown</c> may contain more URLs than <c>sources</c> / <c>citationPills</c> — the extras are accounted for here. Omitted from <c>result.aioverview</c> when no chip carries related links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relatedLinks")]
    public IReadOnlyList<RelatedLink1>? RelatedLinks { get; init; }

    /// <summary>
    /// AI Overview text content
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// AI Overview content formatted as markdown (if requested)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Video content included in the AI Overview
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videos")]
    public IReadOnlyList<Video2>? Videos { get; init; }

    /// <summary>
    /// Place cards in the AI Overview answer. Omitted when the answer has none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public IReadOnlyList<GooglePlace>? Places { get; init; }

    /// <summary>
    /// The place cards that Google geo-tagged, with coordinates. Omitted when the answer has none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("map")]
    public IReadOnlyList<GoogleMapPlace>? Map { get; init; }

    /// <summary>
    /// Product cards in the AI Overview answer. Omitted when the answer has none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inlineProducts")]
    public IReadOnlyList<GoogleInlineProduct>? InlineProducts { get; init; }

    /// <summary>
    /// Sponsored ads injected by Google inside the AI Overview
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public IReadOnlyList<Ads4>? Ads { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
