using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record StartStreamTranscriptionResponse
{
    /// <summary>
    /// Provides the identifier for your streaming request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Provides the language code that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode8? LanguageCode { get; init; }

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
    public TranscriptResultStream? TranscriptResultStream { get; init; }

    /// <summary>
    /// Provides the name of the custom vocabulary filter that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// Provides the vocabulary filtering method used in your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMethod")]
    public VocabularyFilterMethod3? VocabularyFilterMethod { get; init; }

    /// <summary>
    /// Shows whether speaker partitioning was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ShowSpeakerLabel")]
    public bool? ShowSpeakerLabel { get; init; }

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
    /// Shows whether partial results stabilization was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EnablePartialResultsStabilization")]
    public bool? EnablePartialResultsStabilization { get; init; }

    /// <summary>
    /// Provides the stabilization level used for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PartialResultsStability")]
    public PartialResultsStability? PartialResultsStability { get; init; }

    /// <summary>
    /// Shows whether content identification was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentIdentificationType")]
    public ContentIdentificationType2? ContentIdentificationType { get; init; }

    /// <summary>
    /// Shows whether content redaction was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentRedactionType")]
    public ContentRedactionType1? ContentRedactionType { get; init; }

    /// <summary>
    /// Lists the PII entity types you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PiiEntityTypes")]
    public string? PiiEntityTypes { get; init; }

    /// <summary>
    /// Provides the name of the custom language model that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageModelName")]
    public string? LanguageModelName { get; init; }

    /// <summary>
    /// Shows whether automatic language identification was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifyLanguage")]
    public bool? IdentifyLanguage { get; init; }

    /// <summary>
    /// Provides the language codes that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageOptions")]
    public string? LanguageOptions { get; init; }

    /// <summary>
    /// Provides the preferred language that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PreferredLanguage")]
    public PreferredLanguage1? PreferredLanguage { get; init; }

    /// <summary>
    /// Shows whether automatic multi-language identification was enabled for your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifyMultipleLanguages")]
    public bool? IdentifyMultipleLanguages { get; init; }

    /// <summary>
    /// Provides the names of the custom vocabularies that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyNames")]
    public string? VocabularyNames { get; init; }

    /// <summary>
    /// Provides the names of the custom vocabulary filters that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterNames")]
    public string? VocabularyFilterNames { get; init; }

    /// <summary>
    /// Provides the session resume window, in minutes, that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SessionResumeWindow")]
    public int? SessionResumeWindow { get; init; }

    /// <summary>
    /// Provides the transcript format that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptFormat")]
    public TranscriptFormat? TranscriptFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
