using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

/// <summary>
/// How an article matched a <c>/api/news/search/</c> query.
/// </summary>
public record SearchMatch
{
    /// <summary>
    /// The engine's ranking score for this row. Comparable within one response only, never across queries or engine versions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    /// <summary>
    /// In <c>broadened</c> mode, how many of the query's words this row carries (at least two); <c>null</c> in <c>strict</c> mode, where every word matched.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terms_matched")]
    public int? TermsMatched { get; init; }

    /// <summary>
    /// A fragment of the summary around the matched words, each wrapped in <c><b>…</b></c>; <c>null</c> when the match lies in the title or the entity names only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public string? Context { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
