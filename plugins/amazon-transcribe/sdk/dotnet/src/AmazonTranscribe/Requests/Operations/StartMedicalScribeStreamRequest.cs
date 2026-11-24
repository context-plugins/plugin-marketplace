using AmazonTranscribe.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the StartMedicalScribeStream operation.
/// </summary>
public sealed record StartMedicalScribeStreamRequest
{
    /// <summary>
    /// Specify the language code for your HealthScribe streaming session.
    /// </summary>
    public required XAmznTranscribeLanguageCode XAmznTranscribeLanguageCode { get; init; }

    /// <summary>
    /// Specify the sample rate of the input audio (in hertz). Amazon Web Services HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that of your audio.
    /// </summary>
    public required int XAmznTranscribeSampleRate { get; init; }

    /// <summary>
    /// Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats.
    /// </summary>
    public required XAmznTranscribeMediaEncoding XAmznTranscribeMediaEncoding { get; init; }

    /// <summary>
    /// Specify an identifier for your streaming session (in UUID format). If you don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns it in the response.
    /// </summary>
    public string? XAmznTranscribeSessionId { get; init; }

    public MedicalScribeInputStream? Body { get; init; }
}
