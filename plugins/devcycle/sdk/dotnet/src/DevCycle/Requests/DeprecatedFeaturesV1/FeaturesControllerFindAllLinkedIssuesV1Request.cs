namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerFindAllLinkedIssuesV1 operation.
/// </summary>
public sealed record FeaturesControllerFindAllLinkedIssuesV1Request
{
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
