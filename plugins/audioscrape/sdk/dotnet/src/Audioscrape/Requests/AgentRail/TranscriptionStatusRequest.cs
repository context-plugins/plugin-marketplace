namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the TranscriptionStatus operation.
/// </summary>
public sealed record TranscriptionStatusRequest
{
    /// <summary>
    /// Job id from /api/agent/v1/transcribe
    /// </summary>
    public required long JobId { get; init; }
}
