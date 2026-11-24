using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record StartMedicalScribeStreamResponse
{
    /// <summary>
    /// The identifier (in UUID format) for your streaming session. If you already started streaming, this is same ID as the one you specified in your initial StartMedicalScribeStreamRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The unique identifier for your streaming request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// The Language Code that you specified in your request. Same as provided in the StartMedicalScribeStreamRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode6? LanguageCode { get; init; }

    /// <summary>
    /// The sample rate (in hertz) that you specified in your request. Same as provided in the StartMedicalScribeStreamRequest
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaSampleRateHertz")]
    public int? MediaSampleRateHertz { get; init; }

    /// <summary>
    /// The Media Encoding you specified in your request. Same as provided in the StartMedicalScribeStreamRequest
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaEncoding")]
    public MediaEncoding2? MediaEncoding { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResultStream")]
    public MedicalScribeResultStream? ResultStream { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
