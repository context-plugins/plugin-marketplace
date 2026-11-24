using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record CitationPill10
{
    /// <summary>
    /// The URL of the citation
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Per-source title of the citation. Always present; may be an empty string when the citation event ships no title — read <c>domain</c> / <c>url</c> for source identity in that case.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// Description of the citation content. Omitted when the citation event carries no snippet (e.g. grouped-webpage title-only cards).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Domain of the citation source
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// ISO 8601 date string of when the source was published. Omitted when the citation event carries no publication date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datePublished")]
    public string? DatePublished { get; init; }

    /// <summary>
    /// 0-based identifier shared by all entries from the same chip. Group by <c>citationPillId</c> to recover the pill-level structure. <b>Note:</b> unlike the other providers (Google AIO, AI Mode, Gemini) which use 1-based <c>citationPillId</c>, ChatGPT's IDs start at 0 for historical reasons.
    /// </summary>
    [JsonPropertyName("citationPillId")]
    public required int CitationPillId { get; init; }

    /// <summary>
    /// Discriminator for the underlying citation event: <c>searchResult</c> for inline search citations, <c>groupedWebpage</c> for grouped-webpage cards.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type3 Type { get; init; }

    /// <summary>
    /// 1-based position of this source in the sibling <c>result.sources</c> array.
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
