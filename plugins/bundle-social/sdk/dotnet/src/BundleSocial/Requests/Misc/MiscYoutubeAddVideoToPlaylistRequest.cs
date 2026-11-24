using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeAddVideoToPlaylist operation.
/// </summary>
public sealed record MiscYoutubeAddVideoToPlaylistRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubePlaylistItemsRequest? Body { get; init; }
}
