namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerGetPendingFeatureChangeRequests operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest
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
