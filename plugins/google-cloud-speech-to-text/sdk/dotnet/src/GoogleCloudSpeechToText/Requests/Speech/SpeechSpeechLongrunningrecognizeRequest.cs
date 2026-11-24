using GoogleCloudSpeechToText.Models;

namespace GoogleCloudSpeechToText.Requests.Speech;

/// <summary>
/// The inputs of the SpeechSpeechLongrunningrecognize operation.
/// </summary>
public sealed record SpeechSpeechLongrunningrecognizeRequest
{
    public required LongRunningRecognizeRequest Body { get; init; }
}
