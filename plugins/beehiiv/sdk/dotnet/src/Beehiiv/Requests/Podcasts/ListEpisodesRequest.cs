using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Podcasts;

/// <summary>
/// The inputs of the ListEpisodes operation.
/// </summary>
public sealed record ListEpisodesRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the podcast
    /// </summary>
    public required string PodcastShowId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Use this opaque cursor token to fetch the next page of results. Obtain the value from <c>next_cursor</c> in a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Optionally filter the results by the status of the episode.&lt;br&gt;<c>draft</c> - Not yet published.&lt;br&gt;<c>scheduled</c> - Scheduled for future publication.&lt;br&gt;<c>published</c> - Available via web and RSS.&lt;br&gt;<c>archived</c> - No longer available via web or RSS.
    /// </summary>
    public PodcastEpisodeStatus? Status { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to <c>displayed_date</c>&lt;br&gt;<c>created</c> - The time in which the episode was first created.&lt;br&gt;<c>updated</c> - The time the episode was last updated.&lt;br&gt;<c>publish_date</c> - The exact time the system published the episode (when it went live), not the scheduled time the user set.&lt;br&gt;<c>displayed_date</c> - The time displayed in place of the <c>publish_date</c>. Uses a custom display date if set, otherwise the scheduled time the user set for publication, otherwise the <c>publish_date</c>, otherwise the creation date. For imported episodes, the original feed's <c>pubDate</c> is stored as the custom display date. This is the same field used to order episodes in the podcast's RSS feed.
    /// </summary>
    public PodcastEpisodeOrderBy OrderBy { get; init; } = PodcastEpisodeOrderBy.DisplayedDate;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to desc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
