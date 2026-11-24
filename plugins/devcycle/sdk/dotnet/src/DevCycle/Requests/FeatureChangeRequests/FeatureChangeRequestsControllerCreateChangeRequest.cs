using DevCycle.Models;

namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerCreateChangeRequest operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerCreateChangeRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateFeatureChangeRequestDto Body { get; init; }
}
