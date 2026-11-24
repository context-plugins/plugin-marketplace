namespace Audioscrape.Requests.Charts;

/// <summary>
/// The inputs of the GetChartPodcasts operation.
/// </summary>
public sealed record GetChartPodcastsRequest
{
    /// <summary>
    /// ISO 3166-1 alpha-2 country code (default <c>us</c>)
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// <c>apple</c> or <c>spotify</c> (default: both)
    /// </summary>
    public string? Platform { get; init; }

    /// <summary>
    /// Max results (default 50, max 200)
    /// </summary>
    public long? Limit { get; init; }
}
