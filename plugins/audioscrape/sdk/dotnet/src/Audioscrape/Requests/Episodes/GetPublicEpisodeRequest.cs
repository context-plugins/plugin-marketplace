namespace Audioscrape.Requests.Episodes;

/// <summary>
/// The inputs of the GetPublicEpisode operation.
/// </summary>
public sealed record GetPublicEpisodeRequest
{
    /// <summary>
    /// Numeric episode ID
    /// </summary>
    public required string EpisodeId { get; init; }

    /// <summary>
    /// Comma-separated optional fields: <c>transcript</c>, <c>entities</c>.
    /// </summary>
    public string? Include { get; init; }
}
