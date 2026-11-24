namespace Beehiiv.Requests.Podcasts;

/// <summary>
/// The inputs of the GetPodcast operation.
/// </summary>
public sealed record GetPodcastRequest
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
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
