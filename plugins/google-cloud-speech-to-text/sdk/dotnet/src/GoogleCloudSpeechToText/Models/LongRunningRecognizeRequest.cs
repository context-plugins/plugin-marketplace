using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// The top-level message sent by the client for the <c>LongRunningRecognize</c> method.
/// </summary>
public record LongRunningRecognizeRequest
{
    /// <summary>
    /// Optional. Specifies an optional destination for the recognition results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputConfig")]
    public TranscriptOutputConfig2? OutputConfig { get; init; }

    /// <summary>
    /// Required. The audio data to be recognized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audio")]
    public RecognitionAudio2? Audio { get; init; }

    /// <summary>
    /// Required. Provides information to the recognizer that specifies how to process the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public RecognitionConfig2? Config { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
