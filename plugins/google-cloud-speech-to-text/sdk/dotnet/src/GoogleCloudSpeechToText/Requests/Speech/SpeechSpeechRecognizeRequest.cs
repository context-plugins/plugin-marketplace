using GoogleCloudSpeechToText.Models;

namespace GoogleCloudSpeechToText.Requests.Speech;

/// <summary>
/// The inputs of the SpeechSpeechRecognize operation.
/// </summary>
public sealed record SpeechSpeechRecognizeRequest
{
    public required RecognizeRequest Body { get; init; }
}
