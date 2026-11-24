namespace Audioscrape.Requests.Podcasts;

/// <summary>
/// The inputs of the ListPodcastEpisodesV1 operation.
/// </summary>
public sealed record ListPodcastEpisodesV1Request
{
    /// <summary>
    /// Numeric podcast ID OR URL slug
    /// </summary>
    public required string PodcastId { get; init; }

    /// <summary>
    /// Max results (default 20, max 100)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// Result offset for pagination
    /// </summary>
    public long? Offset { get; init; }
}
