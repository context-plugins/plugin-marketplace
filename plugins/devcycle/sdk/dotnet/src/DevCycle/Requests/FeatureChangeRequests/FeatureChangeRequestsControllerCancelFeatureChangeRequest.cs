namespace DevCycle.Requests.FeatureChangeRequests;

/// <summary>
/// The inputs of the FeatureChangeRequestsControllerCancelFeatureChangeRequest operation.
/// </summary>
public sealed record FeatureChangeRequestsControllerCancelFeatureChangeRequest
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
}
