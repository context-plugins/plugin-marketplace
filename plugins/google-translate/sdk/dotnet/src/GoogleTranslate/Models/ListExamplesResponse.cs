using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Response message for ListExamples.
/// </summary>
public record ListExamplesResponse
{
    /// <summary>
    /// The sentence pairs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("examples")]
    public IReadOnlyList<Example>? Examples { get; init; }

    /// <summary>
    /// A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
