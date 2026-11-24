namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeGetRegions operation.
/// </summary>
public sealed record MiscYoutubeGetRegionsRequest
{
    public required string TeamId { get; init; }
}
