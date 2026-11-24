using AmazonTranscribe.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the StartCallAnalyticsStreamTranscription operation.
/// </summary>
public sealed record StartCallAnalyticsStreamTranscriptionRequest
{
    /// <summary>
    /// The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
    /// </summary>
    public required int XAmznTranscribeSampleRate { get; init; }

    /// <summary>
    /// Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats.
    /// </summary>
    public required XAmznTranscribeMediaEncoding1 XAmznTranscribeMediaEncoding { get; init; }

    /// <summary>
    /// Specify the language code that represents the language spoken in your audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages table.
    /// </summary>
    public XAmznTranscribeLanguageCode1? XAmznTranscribeLanguageCode { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. For more information, see Custom vocabularies.
    /// </summary>
    public string? XAmznTranscribeVocabularyName { get; init; }

    /// <summary>
    /// Specify a name for your Call Analytics transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
    /// </summary>
    public string? XAmznTranscribeSessionId { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary filtering with unwanted words.
    /// </summary>
    public string? XAmznTranscribeVocabularyFilterName { get; init; }

    /// <summary>
    /// Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.
    /// </summary>
    public XAmznTranscribeVocabularyFilterMethod? XAmznTranscribeVocabularyFilterMethod { get; init; }

    /// <summary>
    /// Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models.
    /// </summary>
    public string? XAmznTranscribeLanguageModelName { get; init; }

    /// <summary>
    /// Enables automatic language identification for your Call Analytics transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two language selections. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you include both parameters, your transcri
    /// </summary>
    public bool? XAmznTranscribeIdentifyLanguage { get; init; }

    /// <summary>
    /// Specify two or more language codes that represent the languages you think may be present in your media. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage. For a list of languages supported with Call Analytics streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request.
    /// </summary>
    public string? XAmznTranscribeLanguageOptions { get; init; }

    /// <summary>
    /// Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request.
    /// </summary>
    public XAmznTranscribePreferredLanguage? XAmznTranscribePreferredLanguage { get; init; }

    /// <summary>
    /// Specify the names of the custom vocabularies that you want to use when processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the custom vocabulary's language doesn't match the identified media language, it won't be applied to the transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
    /// </summary>
    public string? XAmznTranscribeVocabularyNames { get; init; }

    /// <summary>
    /// Specify the names of the custom vocabulary filters that you want to use when processing your Call Analytics transcription. Note that vocabulary filter names are case sensitive. These filters serve to customize the transcript output. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with unwanted words.
    /// </summary>
    public string? XAmznTranscribeVocabularyFilterNames { get; init; }

    /// <summary>
    /// Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see Partial-result stabilization.
    /// </summary>
    public bool? XAmznTranscribeEnablePartialResultsStabilization { get; init; }

    /// <summary>
    /// Specify the level of stability to use when you enable partial results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy. For more information, see Partial-result stabilization.
    /// </summary>
    public XAmznTranscribePartialResultsStability? XAmznTranscribePartialResultsStability { get; init; }

    /// <summary>
    /// Labels all personally identifiable information (PII) identified in your transcript. Content identification is performed at the segment level; PII specified in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and ContentRedactionType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.
    /// </summary>
    public XAmznTranscribeContentIdentificationType? XAmznTranscribeContentIdentificationType { get; init; }

    /// <summary>
    /// Redacts all personally identifiable information (PII) identified in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.
    /// </summary>
    public XAmznTranscribeContentRedactionType? XAmznTranscribeContentRedactionType { get; init; }

    /// <summary>
    /// Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request, but do not include PiiEnti
    /// </summary>
    public string? XAmznTranscribePiiEntityTypes { get; init; }

    public AudioStream? Body { get; init; }
}
