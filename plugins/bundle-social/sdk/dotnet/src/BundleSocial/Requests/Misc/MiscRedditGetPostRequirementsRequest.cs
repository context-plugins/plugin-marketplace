namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditGetPostRequirements operation.
/// </summary>
public sealed record MiscRedditGetPostRequirementsRequest
{
    public required string TeamId { get; init; }

    public required string Subreddit { get; init; }
}
