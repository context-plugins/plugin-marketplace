namespace Audioscrape.Requests.Podcasts;

/// <summary>
/// The inputs of the GetPodcastRankingHistory operation.
/// </summary>
public sealed record GetPodcastRankingHistoryRequest
{
    /// <summary>
    /// Numeric podcast ID OR URL slug
    /// </summary>
    public required string PodcastId { get; init; }
}
