namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the Overview operation.
/// </summary>
public sealed record OverviewRequest
{
    /// <summary>
    /// Recording id (from a search result).
    /// </summary>
    public required long EpisodeId { get; init; }
}
