using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Models.Enums;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Description of audio data to be recognized.
/// </summary>
public record RecognitionMetadata
{
    /// <summary>
    /// Description of the content. Eg. "Recordings of federal supreme court hearings from 2012".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioTopic")]
    public string? AudioTopic { get; init; }

    /// <summary>
    /// The audio type that most closely describes the audio being recognized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microphoneDistance")]
    public MicrophoneDistance? MicrophoneDistance { get; init; }

    /// <summary>
    /// The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryNaicsCodeOfAudio")]
    public int? IndustryNaicsCodeOfAudio { get; init; }

    /// <summary>
    /// The use case most closely describing the audio content to be recognized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interactionType")]
    public InteractionType? InteractionType { get; init; }

    /// <summary>
    /// The type of device the speech was recorded with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordingDeviceType")]
    public RecordingDeviceType? RecordingDeviceType { get; init; }

    /// <summary>
    /// The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or 'Cardioid Microphone'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordingDeviceName")]
    public string? RecordingDeviceName { get; init; }

    /// <summary>
    /// Mime type of the original audio file. For example <c>audio/m4a</c>, <c>audio/x-alaw-basic</c>, <c>audio/mp3</c>, <c>audio/3gpp</c>. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalMimeType")]
    public string? OriginalMimeType { get; init; }

    /// <summary>
    /// The original media the speech was recorded on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalMediaType")]
    public OriginalMediaType? OriginalMediaType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
