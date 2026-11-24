using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Optional settings for returning full content.
/// </summary>
public record FullContentSettings
{
    /// <summary>
    /// Optional limit on the number of characters to include in the full content for each url. Full content always starts at the beginning of the page and is truncated at the limit if necessary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_chars_per_result")]
    public MaxCharsPerResult1? MaxCharsPerResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
