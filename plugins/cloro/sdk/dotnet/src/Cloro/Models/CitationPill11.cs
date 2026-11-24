using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record CitationPill11
{
    /// <summary>
    /// 1-based position of this source in the sibling <c>result.sources</c> array.
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    /// <summary>
    /// Title of the cited source, the same as its <c>label</c> in <c>result.sources</c>. Can be an empty string.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

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
    /// 1-based ordinal that all entries from the same chip share.
    /// </summary>
    [JsonPropertyName("citationPillId")]
    public required int CitationPillId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
