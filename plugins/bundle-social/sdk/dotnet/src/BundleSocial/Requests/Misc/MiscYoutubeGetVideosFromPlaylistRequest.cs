using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeGetVideosFromPlaylist operation.
/// </summary>
public sealed record MiscYoutubeGetVideosFromPlaylistRequest
{
    public required string TeamId { get; init; }

    public required string PlaylistId { get; init; }

    [Minimum(1)]
    [Maximum(20)]
    public int MaxResults { get; init; } = 10;
}
