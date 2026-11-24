using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Models.Enums;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Provides information to the recognizer that specifies how to process the request.
/// </summary>
public record RecognitionConfig
{
    /// <summary>
    /// If <c>true</c>, the top result includes a list of words and the confidence for those words. If <c>false</c>, no word-level confidence information is returned. The default is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableWordConfidence")]
    public bool? EnableWordConfidence { get; init; }

    /// <summary>
    /// If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableAutomaticPunctuation")]
    public bool? EnableAutomaticPunctuation { get; init; }

    /// <summary>
    /// Set to true to use an enhanced model for speech recognition. If <c>use_enhanced</c> is set to true and the <c>model</c> field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If <c>use_enhanced</c> is true and an enhanced version of the specified model does not exist, then the speech is recognized using the standard version of the specified model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useEnhanced")]
    public bool? UseEnhanced { get; init; }

    /// <summary>
    /// Speech adaptation configuration improves the accuracy of speech recognition. For more information, see the <see href="https://cloud.google.com/speech-to-text/docs/adaptation">speech adaptation</see> documentation. When speech adaptation is set it supersedes the <c>speech_contexts</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptation")]
    public SpeechAdaptation2? Adaptation { get; init; }

    /// <summary>
    /// This needs to be set to <c>true</c> explicitly and <c>audio_channel_count</c> &gt; 1 to get each channel recognized separately. The recognition result will contain a <c>channel_tag</c> field to state which channel that result belongs to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all channels recognized: <c>audio_channel_count</c> multiplied by the length of the audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSeparateRecognitionPerChannel")]
    public bool? EnableSeparateRecognitionPerChannel { get; init; }

    /// <summary>
    /// Metadata regarding this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public RecognitionMetadata2? Metadata { get; init; }

    /// <summary>
    /// The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g. command_and_search will enable spoken punctuation by default If 'true', replaces spoken punctuation with the corresponding symbols in the request. For example, "how are you question mark" becomes "how are you?". See https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken punctuation is not replaced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSpokenPunctuation")]
    public bool? EnableSpokenPunctuation { get; init; }

    /// <summary>
    /// A list of up to 3 additional <see href="https://www.rfc-editor.org/rfc/bcp/bcp47.txt">BCP-47</see> language tags, listing possible alternative languages of the supplied audio. See <see href="https://cloud.google.com/speech-to-text/docs/languages">Language Support</see> for a list of the currently supported language codes. If alternative languages are listed, recognition result will contain recognition in the most likely language detected including the main language_code. The recognition result will include the language tag of the language detected in the audio. Note: This feature is only supported for Voice Command and Voice Search use cases and performance may vary for other use cases (e.g., phone call transcription).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeLanguageCodes")]
    public IReadOnlyList<string>? AlternativeLanguageCodes { get; init; }

    /// <summary>
    /// Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of <c>SpeechRecognitionAlternative</c> messages within each <c>SpeechRecognitionResult</c>. The server may return fewer than <c>max_alternatives</c>. Valid values are <c>0</c>-<c>30</c>. A value of <c>0</c> or <c>1</c> will return a maximum of one. If omitted, will return a maximum of one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAlternatives")]
    public int? MaxAlternatives { get; init; }

    /// <summary>
    /// If set to <c>true</c>, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to <c>false</c> or omitted, profanities won't be filtered out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profanityFilter")]
    public bool? ProfanityFilter { get; init; }

    /// <summary>
    /// Required. The language of the supplied audio as a <see href="https://www.rfc-editor.org/rfc/bcp/bcp47.txt">BCP-47</see> language tag. Example: "en-US". See <see href="https://cloud.google.com/speech-to-text/docs/languages">Language Support</see> for a list of the currently supported language codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    /// <summary>
    /// Encoding of audio data sent in all <c>RecognitionAudio</c> messages. This field is optional for <c>FLAC</c> and <c>WAV</c> audio files and required for all other audio formats. For details, see AudioEncoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encoding")]
    public Encoding? Encoding { get; init; }

    /// <summary>
    /// Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability &gt; 0.8) and final transcripts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcriptNormalization")]
    public TranscriptNormalization2? TranscriptNormalization { get; init; }

    /// <summary>
    /// Array of SpeechContext. A means to provide context to assist the speech recognition. For more information, see <see href="https://cloud.google.com/speech-to-text/docs/adaptation">speech adaptation</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechContexts")]
    public IReadOnlyList<SpeechContext>? SpeechContexts { get; init; }

    /// <summary>
    /// The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If 'true', adds spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in the final transcript. If 'false', spoken emojis are not replaced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSpokenEmojis")]
    public bool? EnableSpokenEmojis { get; init; }

    /// <summary>
    /// Which model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short form content like commands or single shot directed speech. command_and_search Best for short queries such as voice commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate. default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from dictation notes by a medical provider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for LINEAR16, OGG_OPUS and FLAC are <c>1</c>-<c>8</c>. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only <c>1</c>. If <c>0</c> or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To perform independent recognition on each channel set <c>enable_separate_recognition_per_channel</c> to 'true'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioChannelCount")]
    public int? AudioChannelCount { get; init; }

    /// <summary>
    /// If <c>true</c>, the top result includes a list of words and the start and end time offsets (timestamps) for those words. If <c>false</c>, no word-level time offset information is returned. The default is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableWordTimeOffsets")]
    public bool? EnableWordTimeOffsets { get; init; }

    /// <summary>
    /// Config to enable speaker diarization and set additional parameters to make diarization better suited for your application. Note: When this is enabled, we send all the words from the beginning of the audio for the top alternative in every consecutive STREAMING responses. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time. For non-streaming requests, the diarization results will be provided only in the top alternative of the FINAL SpeechRecognitionResult.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diarizationConfig")]
    public SpeakerDiarizationConfig2? DiarizationConfig { get; init; }

    /// <summary>
    /// Sample rate in Hertz of the audio data sent in all <c>RecognitionAudio</c> messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV audio files, but is required for all other audio formats. For details, see AudioEncoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleRateHertz")]
    public int? SampleRateHertz { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
