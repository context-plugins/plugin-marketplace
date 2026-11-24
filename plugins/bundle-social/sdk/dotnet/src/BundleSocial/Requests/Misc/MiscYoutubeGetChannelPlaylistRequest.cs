using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeGetChannelPlaylist operation.
/// </summary>
public sealed record MiscYoutubeGetChannelPlaylistRequest
{
    public required string TeamId { get; init; }

    [Minimum(1)]
    [Maximum(20)]
    public int MaxResults { get; init; } = 10;
}
