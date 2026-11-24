namespace Audioscrape.Requests.Episodes;

/// <summary>
/// The inputs of the ListRecentEpisodesV1 operation.
/// </summary>
public sealed record ListRecentEpisodesV1Request
{
    /// <summary>
    /// Max results (default 20, max 100)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// Result offset for pagination
    /// </summary>
    public long? Offset { get; init; }
}
