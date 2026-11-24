using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation.Attributes;

namespace TranscriptFetch.Models;

public record SearchRequest
{
    /// <summary>
    /// Keyword search query.
    /// </summary>
    [JsonPropertyName("query")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Query { get; init; }

    /// <summary>
    /// Max videos to return per page. Defaults to 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(50)]
    public int? Limit { get; init; } = 5;

    /// <summary>
    /// Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page. Cursors encode a list offset capped at 2000, so pagination cannot reach past the first 2000 items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    [MaxLength(256)]
    public string? Cursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
