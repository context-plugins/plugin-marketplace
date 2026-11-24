using System.Text.Json.Serialization;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Optional settings for returning relevant excerpts.
/// </summary>
public record V1ExcerptSettings
{
    /// <summary>
    /// Optional upper bound on the total number of characters to include per url. Excerpts may contain fewer characters than this limit to maximize relevance and token efficiency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_chars_per_result")]
    public MaxCharsPerResult? MaxCharsPerResult { get; init; }
}
