namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerRemoveLinkedIssueV1 operation.
/// </summary>
public sealed record FeaturesControllerRemoveLinkedIssueV1Request
{
    public required string Feature { get; init; }

    public required string IssueId { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
