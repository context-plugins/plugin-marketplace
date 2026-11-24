using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeUpdateChannelPlaylist operation.
/// </summary>
public sealed record MiscYoutubeUpdateChannelPlaylistRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubePlaylistRequest1? Body { get; init; }
}
