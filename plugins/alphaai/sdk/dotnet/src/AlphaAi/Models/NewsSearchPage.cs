using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record NewsSearchPage
{
    /// <summary>
    /// Feed items in rank order, each with <c>search_match</c>.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<RichNewsArticle> Results { get; init; }

    /// <summary>
    /// Pass back as <c>cursor</c> for the next page; <c>null</c> past the 200-match bound.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_cursor")]
    public string? NextCursor { get; init; }

    /// <summary>
    /// Items on this page.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// Visible matches in the bounded candidate set (at most 200); never a global total.
    /// </summary>
    [JsonPropertyName("matched")]
    public required int Matched { get; init; }

    /// <summary>
    /// How <c>/api/news/search/</c> read the query.
    /// </summary>
    [JsonPropertyName("query")]
    public required NewsSearchQueryInfo Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
