namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerGetLatestFeatureChangeRequest operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerGetLatestFeatureChangeRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
