using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Podcasts;

/// <summary>
/// The inputs of the ListPodcasts operation.
/// </summary>
public sealed record ListPodcastsRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Use this opaque cursor token to fetch the next page of results. Obtain the value from <c>next_cursor</c> in a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Optionally filter the results by the status of the podcast.&lt;br&gt;<c>draft</c> - No episodes have been published.&lt;br&gt;<c>live</c> - Published and active.&lt;br&gt;<c>archived</c> - The podcast is no longer active.
    /// </summary>
    public PodcastShowStatus? Status { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
