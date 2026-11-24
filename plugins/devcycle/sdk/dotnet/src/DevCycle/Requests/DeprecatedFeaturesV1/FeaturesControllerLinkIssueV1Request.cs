using DevCycle.Models;

namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerLinkIssueV1 operation.
/// </summary>
public sealed record FeaturesControllerLinkIssueV1Request
{
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required LinkJiraIssueDto Body { get; init; }
}
