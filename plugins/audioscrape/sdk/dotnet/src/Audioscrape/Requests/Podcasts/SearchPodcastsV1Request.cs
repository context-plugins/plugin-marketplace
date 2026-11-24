namespace Audioscrape.Requests.Podcasts;

/// <summary>
/// The inputs of the SearchPodcastsV1 operation.
/// </summary>
public sealed record SearchPodcastsV1Request
{
    /// <summary>
    /// Title substring (case-insensitive)
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// ISO 639-1 language filter (e.g. <c>en</c>, <c>de</c>)
    /// </summary>
    public string? Language { get; init; }

    /// <summary>
    /// Max results (default 20, max 100)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// Result offset for pagination
    /// </summary>
    public long? Offset { get; init; }
}
