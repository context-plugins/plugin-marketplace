namespace Audioscrape.Requests.Podcasts;

/// <summary>
/// The inputs of the GetPublicPodcast operation.
/// </summary>
public sealed record GetPublicPodcastRequest
{
    /// <summary>
    /// Numeric podcast ID OR URL slug (e.g. <c>1234</c> or <c>supply-chain-today</c>)
    /// </summary>
    public required string PodcastId { get; init; }
}
