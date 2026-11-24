using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeCreateNewChannelPlaylist operation.
/// </summary>
public sealed record MiscYoutubeCreateNewChannelPlaylistRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubePlaylistRequest? Body { get; init; }
}
