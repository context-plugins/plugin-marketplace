using Audioscrape.Models;

namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the Transcribe operation.
/// </summary>
public sealed record TranscribeRequest
{
    public required AgentTranscribeRequest Body { get; init; }
}
