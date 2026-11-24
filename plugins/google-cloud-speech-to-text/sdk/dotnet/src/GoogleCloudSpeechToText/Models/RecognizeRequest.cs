using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// The top-level message sent by the client for the <c>Recognize</c> method.
/// </summary>
public record RecognizeRequest
{
    /// <summary>
    /// Required. Provides information to the recognizer that specifies how to process the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public RecognitionConfig2? Config { get; init; }

    /// <summary>
    /// Required. The audio data to be recognized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audio")]
    public RecognitionAudio2? Audio { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
