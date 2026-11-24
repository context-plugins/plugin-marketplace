namespace Audioscrape.Requests.Episodes;

/// <summary>
/// The inputs of the GetEpisodeTranscript operation.
/// </summary>
public sealed record GetEpisodeTranscriptRequest
{
    /// <summary>
    /// Numeric episode ID
    /// </summary>
    public required string EpisodeId { get; init; }
}
