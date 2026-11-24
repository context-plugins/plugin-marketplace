using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Config to enable speaker diarization and set additional parameters to make diarization better suited for your application. Note: When this is enabled, we send all the words from the beginning of the audio for the top alternative in every consecutive STREAMING responses. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time. For non-streaming requests, the diarization results will be provided only in the top alternative of the FINAL SpeechRecognitionResult.
/// </summary>
public record SpeakerDiarizationConfig2
{
    /// <summary>
    /// Output only. Unused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerTag")]
    public int? SpeakerTag { get; init; }

    /// <summary>
    /// Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSpeakerCount")]
    public int? MaxSpeakerCount { get; init; }

    /// <summary>
    /// If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_label provided in the WordInfo.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSpeakerDiarization")]
    public bool? EnableSpeakerDiarization { get; init; }

    /// <summary>
    /// Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minSpeakerCount")]
    public int? MinSpeakerCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
