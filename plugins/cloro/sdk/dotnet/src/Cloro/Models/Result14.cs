using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Bing AI Mode response data
/// </summary>
public record Result14
{
    /// <summary>
    /// Bing AI Mode's answer as plain text, without citation chips
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Sources for the answer: first the pages Bing read, then any other page that a citation chip links. Empty when the answer has no sources.
    /// </summary>
    [JsonPropertyName("sources")]
    public required IReadOnlyList<Source18> Sources { get; init; }

    /// <summary>
    /// Inline citation chips in the answer. Each entry is one (chip, source) pair: when a chip cites N sources, the array has N entries with the same <c>citationPillId</c>. Group by <c>citationPillId</c> to get the chips. Empty when the answer has no chips.
    /// </summary>
    [JsonPropertyName("citationPills")]
    public required IReadOnlyList<CitationPill11> CitationPills { get; init; }

    /// <summary>
    /// The answer formatted in Markdown, with citations as links (included when include.markdown is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// A URL to the full HTML of the page that Bing rendered (included when include.html is true).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    [Format(FormatKind.Uri)]
    public string? Html { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
