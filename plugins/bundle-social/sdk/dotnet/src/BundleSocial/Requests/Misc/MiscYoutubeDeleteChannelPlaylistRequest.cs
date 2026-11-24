namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeDeleteChannelPlaylist operation.
/// </summary>
public sealed record MiscYoutubeDeleteChannelPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public required string TeamId { get; init; }
}
