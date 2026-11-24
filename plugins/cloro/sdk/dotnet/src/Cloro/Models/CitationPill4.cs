using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record CitationPill4
{
    /// <summary>
    /// Per-source title from the sources rail (for example <c>"Best Laptops 2026 — Reuters"</c>). Empty string when the rail has no title for this source — consumers should read <c>domain</c> / <c>url</c> for source identity in that case. Entries grouped under the same <c>citationPillId</c> carry different per-source labels.
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
    /// Source description from the sources rail when Google ships one. Omitted when the source carries no snippet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// 1-based position of this source in the sibling <c>result.sources</c> array. Omitted when the cited source isn't in <c>result.sources</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
