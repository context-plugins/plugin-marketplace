namespace Beehiiv.Requests.Podcasts;

/// <summary>
/// The inputs of the GetEpisode operation.
/// </summary>
public sealed record GetEpisodeRequest
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
    /// The prefixed ID of the episode
    /// </summary>
    public required string PodcastEpisodeId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
