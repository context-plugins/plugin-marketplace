using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// The only message returned to the client by the <c>Recognize</c> method. It contains the result as zero or more sequential <c>SpeechRecognitionResult</c> messages.
/// </summary>
public record RecognizeResponse
{
    /// <summary>
    /// When available, billed audio seconds for the corresponding request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalBilledTime")]
    public string? TotalBilledTime { get; init; }

    /// <summary>
    /// Whether request used legacy asr models (was not automatically migrated to use conformer models).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usingLegacyModels")]
    public bool? UsingLegacyModels { get; init; }

    /// <summary>
    /// Provides information on adaptation behavior in response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechAdaptationInfo")]
    public SpeechAdaptationInfo2? SpeechAdaptationInfo { get; init; }

    /// <summary>
    /// Sequential list of transcription results corresponding to sequential portions of audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<SpeechRecognitionResult>? Results { get; init; }

    /// <summary>
    /// The ID associated with the request. This is a unique ID specific only to the given request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
