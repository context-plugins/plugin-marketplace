using AmazonTranscribe.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the StartMedicalStreamTranscription operation.
/// </summary>
public sealed record StartMedicalStreamTranscriptionRequest
{
    /// <summary>
    /// Specify the language code that represents the language spoken in your audio. Amazon Transcribe Medical only supports US English (en-US).
    /// </summary>
    public required XAmznTranscribeLanguageCode2 XAmznTranscribeLanguageCode { get; init; }

    /// <summary>
    /// The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
    /// </summary>
    public required int XAmznTranscribeSampleRate { get; init; }

    /// <summary>
    /// Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats.
    /// </summary>
    public required XAmznTranscribeMediaEncoding1 XAmznTranscribeMediaEncoding { get; init; }

    /// <summary>
    /// Specify the medical specialty contained in your audio.
    /// </summary>
    public required XAmznTranscribeSpecialty XAmznTranscribeSpecialty { get; init; }

    /// <summary>
    /// Specify the type of input audio. For example, choose DICTATION for a provider dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
    /// </summary>
    public required XAmznTranscribeType XAmznTranscribeType { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
    /// </summary>
    public string? XAmznTranscribeVocabularyName { get; init; }

    /// <summary>
    /// Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization).
    /// </summary>
    public bool? XAmznTranscribeShowSpeakerLabel { get; init; }

    /// <summary>
    /// Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
    /// </summary>
    public string? XAmznTranscribeSessionId { get; init; }

    /// <summary>
    /// Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio.
    /// </summary>
    public bool? XAmznTranscribeEnableChannelIdentification { get; init; }

    /// <summary>
    /// Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification.
    /// </summary>
    public int? XAmznTranscribeNumberOfChannels { get; init; }

    /// <summary>
    /// Labels all personal health information (PHI) identified in your transcript. Content identification is performed at the segment level; PHI is flagged upon complete transcription of an audio segment. For more information, see Identifying personal health information (PHI) in a transcription.
    /// </summary>
    public XAmznTranscribeContentIdentificationType1? XAmznTranscribeContentIdentificationType { get; init; }

    public AudioStream? Body { get; init; }
}
