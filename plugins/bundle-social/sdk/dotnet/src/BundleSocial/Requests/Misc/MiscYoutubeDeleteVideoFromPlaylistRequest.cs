namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeDeleteVideoFromPlaylist operation.
/// </summary>
public sealed record MiscYoutubeDeleteVideoFromPlaylistRequest
{
    /// <summary>
    /// Playlist item ID (not video ID)
    /// </summary>
    public required string PlaylistItemId { get; init; }

    public required string TeamId { get; init; }
}
