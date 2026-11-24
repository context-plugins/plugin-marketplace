using DevCycle.Models;

namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerApplyFeatureChangeRequest operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerApplyFeatureChangeRequest
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

    public required ApplyFeatureChangeRequestDto Body { get; init; }
}
