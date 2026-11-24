using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// A speech recognition result corresponding to a portion of the audio.
/// </summary>
public record SpeechRecognitionResult
{
    /// <summary>
    /// Output only. The <see href="https://www.rfc-editor.org/rfc/bcp/bcp47.txt">BCP-47</see> language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    /// <summary>
    /// May contain one or more recognition hypotheses (up to the maximum specified in <c>max_alternatives</c>). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternatives")]
    public IReadOnlyList<SpeechRecognitionAlternative>? Alternatives { get; init; }

    /// <summary>
    /// For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count = N, its output values can range from '1' to 'N'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channelTag")]
    public int? ChannelTag { get; init; }

    /// <summary>
    /// Time offset of the end of this result relative to the beginning of the audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultEndTime")]
    public string? ResultEndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
