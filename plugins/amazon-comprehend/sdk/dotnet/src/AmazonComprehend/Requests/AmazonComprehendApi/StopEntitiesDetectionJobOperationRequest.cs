using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopEntitiesDetectionJob operation.
/// </summary>
public sealed record StopEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget49 XAmzTarget { get; init; }
}
