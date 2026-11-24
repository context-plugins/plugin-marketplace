using AmazonTranscribe.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the StartStreamTranscription operation.
/// </summary>
public sealed record StartStreamTranscriptionRequest
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
    /// Specify the language code that represents the language spoken in your audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable automatic language identification. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table.
    /// </summary>
    public XAmznTranscribeLanguageCode2? XAmznTranscribeLanguageCode { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more custom vocabularies with your transcription, use the VocabularyNames parameter instead. For more information, see Custom vocabularies
    /// </summary>
    public string? XAmznTranscribeVocabularyName { get; init; }

    /// <summary>
    /// Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
    /// </summary>
    public string? XAmznTranscribeSessionId { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For more informatio
    /// </summary>
    public string? XAmznTranscribeVocabularyFilterName { get; init; }

    /// <summary>
    /// Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.
    /// </summary>
    public XAmznTranscribeVocabularyFilterMethod? XAmznTranscribeVocabularyFilterMethod { get; init; }

    /// <summary>
    /// Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization).
    /// </summary>
    public bool? XAmznTranscribeShowSpeakerLabel { get; init; }

    /// <summary>
    /// Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio.
    /// </summary>
    public bool? XAmznTranscribeEnableChannelIdentification { get; init; }

    /// <summary>
    /// Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification.
    /// </summary>
    public int? XAmznTranscribeNumberOfChannels { get; init; }

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
    /// Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE, DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you in
    /// </summary>
    public string? XAmznTranscribePiiEntityTypes { get; init; }

    /// <summary>
    /// Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models.
    /// </summary>
    public string? XAmznTranscribeLanguageModelName { get; init; }

    /// <summary>
    /// Enables automatic language identification for your transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. If you have multi-channel audio that contains different languages on each channel, and you've enabled channel identification, automatic language identification identifies the dominant language on eac
    /// </summary>
    public bool? XAmznTranscribeIdentifyLanguage { get; init; }

    /// <summary>
    /// Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request.
    /// </summary>
    public string? XAmznTranscribeLanguageOptions { get; init; }

    /// <summary>
    /// Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request.
    /// </summary>
    public XAmznTranscribePreferredLanguage1? XAmznTranscribePreferredLanguage { get; init; }

    /// <summary>
    /// Enables automatic multi-language identification in your transcription job request. Use this parameter if your stream contains more than one language. If your stream contains only one language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic multiple language identification request, include VocabularyNames or VocabularyFilterNames. Note that you must include one of Language
    /// </summary>
    public bool? XAmznTranscribeIdentifyMultipleLanguages { get; init; }

    /// <summary>
    /// Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If none of the languages of the specified custom vocabularies match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
    /// </summary>
    public string? XAmznTranscribeVocabularyNames { get; init; }

    /// <summary>
    /// Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none of the languages of the specified custom vocabulary filters match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with u
    /// </summary>
    public string? XAmznTranscribeVocabularyFilterNames { get; init; }

    /// <summary>
    /// Specify the time window, in minutes, during which your transcription session can be resumed, measured from the stream start time. This optional parameter accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want until 1:30 PM.
    /// </summary>
    public int? XAmznTranscribeSessionResumeWindow { get; init; }

    /// <summary>
    /// Specify how numbers, dates, and other alphanumeric entities are rendered in your transcription results. WRITTEN renders these entities in their standard written form (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value, Amazon Transcribe uses WRITTEN by default.
    /// </summary>
    public XAmznTranscribeTranscriptFormat? XAmznTranscribeTranscriptFormat { get; init; }

    public AudioStream? Body { get; init; }
}
