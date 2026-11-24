using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Alternative hypotheses (a.k.a. n-best list).
/// </summary>
public record SpeechRecognitionAlternative
{
    /// <summary>
    /// A list of word-specific information for each recognized word. Note: When <c>enable_speaker_diarization</c> is true, you will see all the words from the beginning of the audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("words")]
    public IReadOnlyList<WordInfo>? Words { get; init; }

    /// <summary>
    /// Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the full transcript without using a separator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public string? Transcript { get; init; }

    /// <summary>
    /// The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where <c>is_final=true</c>. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating <c>confidence</c> was not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    public double? Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
