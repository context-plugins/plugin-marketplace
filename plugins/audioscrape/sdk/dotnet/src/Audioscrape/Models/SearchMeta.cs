using System.Text.Json.Serialization;
using Audioscrape.Core.Models;
using Audioscrape.Core.Validation.Attributes;

namespace Audioscrape.Models;

public record SearchMeta
{
    [JsonPropertyName("has_more")]
    public required bool HasMore { get; init; }

    [JsonPropertyName("limit")]
    [Minimum(0)]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    [Minimum(0)]
    public required int Offset { get; init; }

    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// GH#423: present when sort.field=date was honored. "global" = the whole
    /// match set was date-ordered server-side (text search); "retrieved_window"
    /// = the similarity-retrieved window was date-ordered (semantic/hybrid,
    /// where a global date order isn't defined for kNN retrieval).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort_scope")]
    public string? SortScope { get; init; }

    [JsonPropertyName("took_ms")]
    [Minimum(0)]
    public required long TookMs { get; init; }

    [JsonPropertyName("total")]
    [Minimum(0)]
    public required long Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
