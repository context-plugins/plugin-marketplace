using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// List AdaptiveMt sentences response.
/// </summary>
public record ListAdaptiveMtSentencesResponse
{
    /// <summary>
    /// Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Output only. The list of AdaptiveMtSentences.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptiveMtSentences")]
    public IReadOnlyList<AdaptiveMtSentence>? AdaptiveMtSentences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
