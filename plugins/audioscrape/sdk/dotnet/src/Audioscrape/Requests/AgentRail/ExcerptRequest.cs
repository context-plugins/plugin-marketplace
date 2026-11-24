namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the Excerpt operation.
/// </summary>
public sealed record ExcerptRequest
{
    /// <summary>
    /// Recording id (from a search result).
    /// </summary>
    public required long EpisodeId { get; init; }

    /// <summary>
    /// Moment in seconds.
    /// </summary>
    public required double T { get; init; }

    /// <summary>
    /// Seconds after the moment, 10–180 (default 90).
    /// </summary>
    public double? Seconds { get; init; }
}
