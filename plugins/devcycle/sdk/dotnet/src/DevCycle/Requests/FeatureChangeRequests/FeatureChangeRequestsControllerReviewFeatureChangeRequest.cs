using DevCycle.Models;

namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerReviewFeatureChangeRequest operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerReviewFeatureChangeRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    /// <summary>
    /// Controls whether the review should also apply the change request to the feature
    /// </summary>
    public bool? Apply { get; init; }

    public required ReviewFeatureChangeRequestDto Body { get; init; }
}
