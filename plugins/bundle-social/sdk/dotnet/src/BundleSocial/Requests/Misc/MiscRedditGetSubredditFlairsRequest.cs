namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditGetSubredditFlairs operation.
/// </summary>
public sealed record MiscRedditGetSubredditFlairsRequest
{
    public required string TeamId { get; init; }

    public required string Subreddit { get; init; }
}
