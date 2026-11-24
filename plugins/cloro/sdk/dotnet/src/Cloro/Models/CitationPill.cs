using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record CitationPill
{
    /// <summary>
    /// Per-source title from the citation event (e.g. <c>"Microsoft 365 Documentation"</c>, <c>"Productivity Best Practices"</c>). Always present; may be an empty string when the event ships no title — read <c>domain</c> / <c>url</c> for source identity in that case. Entries grouped under the same <c>citationPillId</c> carry different per-source labels.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// 1-based ordinal shared by all entries from the same chip. Group by <c>citationPillId</c> to reconstruct the visible chip; the per-source <c>label</c> differs across entries within a chip.
    /// </summary>
    [JsonPropertyName("citationPillId")]
    public required int CitationPillId { get; init; }

    /// <summary>
    /// Direct URL of the cited source.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Host extracted from <c>url</c>, for grouping and display.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// Source description from the sources rail when Copilot ships one. Omitted when absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// 1-based position of this source in the sibling <c>result.sources</c> array.
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
