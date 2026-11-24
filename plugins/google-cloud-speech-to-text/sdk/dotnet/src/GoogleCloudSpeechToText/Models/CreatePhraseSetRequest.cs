using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Message sent by the client for the <c>CreatePhraseSet</c> method.
/// </summary>
public record CreatePhraseSetRequest
{
    /// <summary>
    /// Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phraseSetId")]
    public string? PhraseSetId { get; init; }

    /// <summary>
    /// Required. The phrase set to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phraseSet")]
    public PhraseSet2? PhraseSet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
