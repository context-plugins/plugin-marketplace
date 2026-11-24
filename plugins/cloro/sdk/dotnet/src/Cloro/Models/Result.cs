using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Copilot response data
/// </summary>
public record Result
{
    /// <summary>
    /// Copilot's response text
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
    /// Inline citation pills extracted from the Copilot answer. Each entry is one (pill, source) pair: when a pill cites N sources (consecutive citation events grouped into a single chip), the array contains N entries sharing the same <c>citationPillId</c> but carrying per-source <c>label</c>, <c>url</c>, and <c>domain</c>. Group by <c>citationPillId</c> to recover the pill-level structure. Omitted from <c>result</c> when the answer carries no pills.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill>? CitationPills { get; init; }

    /// <summary>
    /// Array of shopping/product cards extracted from the response (when available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shoppingCards")]
    public IReadOnlyList<ShoppingCard>? ShoppingCards { get; init; }

    /// <summary>
    /// Array of business/place map entries extracted from the response (when available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("map")]
    public IReadOnlyList<Map>? Map { get; init; }

    /// <summary>
    /// Array of query fan-out — the web search queries Copilot ran while generating the response. Automatically included when at least one is available, no surcharge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchQueries")]
    public IReadOnlyList<string>? SearchQueries { get; init; }

    /// <summary>
    /// Copilot's response formatted in Markdown (included when include.markdown is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without notice — use it for debugging or to access data not yet surfaced in the structured fields above.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public IReadOnlyList<object>? RawResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
