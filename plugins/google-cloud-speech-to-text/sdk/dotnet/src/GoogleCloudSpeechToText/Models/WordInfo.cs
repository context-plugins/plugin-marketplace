using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Word-specific information for recognized words.
/// </summary>
public record WordInfo
{
    /// <summary>
    /// The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where <c>is_final=true</c>. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating <c>confidence</c> was not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    public double? Confidence { get; init; }

    /// <summary>
    /// Output only. A label value assigned for every unique speaker within the audio. This field specifies which speaker was detected to have spoken this word. For some models, like medical_conversation this can be actual speaker role, for example "patient" or "provider", but generally this would be a number identifying a speaker. This field is only set if enable_speaker_diarization = 'true' and only for the top alternative.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerLabel")]
    public string? SpeakerLabel { get; init; }

    /// <summary>
    /// Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if <c>enable_word_time_offsets=true</c> and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from '1' to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization = 'true' and only for the top alternative. Note: Use speaker_label instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerTag")]
    public int? SpeakerTag { get; init; }

    /// <summary>
    /// Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if <c>enable_word_time_offsets=true</c> and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// The word corresponding to this set of information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("word")]
    public string? Word { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
