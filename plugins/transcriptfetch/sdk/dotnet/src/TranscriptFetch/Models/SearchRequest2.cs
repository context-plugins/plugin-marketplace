using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation.Attributes;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

public record SearchRequest2
{
    /// <summary>
    /// Keyword search query.
    /// </summary>
    [JsonPropertyName("query")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Query { get; init; }

    /// <summary>
    /// Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's url is accepted by the transcript and batch endpoints as-is. rss searches the open podcast index via Apple's directory and returns episode audio (enclosure) URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public Platform1? Platform { get; init; } = Platform1.Youtube;

    /// <summary>
    /// Max videos to return per page. Defaults to 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(50)]
    public int? Limit { get; init; } = 5;

    /// <summary>
    /// Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page. Cursors are scoped to the listing (and, for search, the platform) that issued them. Offset-based sources cannot page past the first 2000 items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    [MaxLength(256)]
    public string? Cursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
