using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record StartMedicalStreamTranscriptionResponse
{
    /// <summary>
    /// Provides the identifier for your streaming request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Provides the language code that you specified in your request. This must be en-US.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode7? LanguageCode { get; init; }

    /// <summary>
    /// Provides the sample rate that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaSampleRateHertz")]
    public int? MediaSampleRateHertz { get; init; }

    /// <summary>
    /// Provides the media encoding you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaEncoding")]
    public MediaEncoding3? MediaEncoding { get; init; }

    /// <summary>
    /// Provides the name of the custom vocabulary that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// Provides the medical specialty that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Specialty")]
    public SpecialtyAmazonTranscribeServiceOperationsApi? Specialty { get; init; }

    /// <summary>
    /// Provides the type of audio you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type4? Type { get; init; }

    /// <summary>
    /// Shows whether speaker partitioning was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ShowSpeakerLabel")]
    public bool? ShowSpeakerLabel { get; init; }

    /// <summary>
    /// Provides the identifier for your transcription session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptResultStream")]
    public MedicalTranscriptResultStream? TranscriptResultStream { get; init; }

    /// <summary>
    /// Shows whether channel identification was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EnableChannelIdentification")]
    public bool? EnableChannelIdentification { get; init; }

    /// <summary>
    /// Provides the number of channels that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfChannels")]
    public int? NumberOfChannels { get; init; }

    /// <summary>
    /// Shows whether content identification was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentIdentificationType")]
    public ContentIdentificationType1AmazonTranscribeServiceOperationsApi? ContentIdentificationType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
