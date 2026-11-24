using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopPiiEntitiesDetectionJob operation.
/// </summary>
public sealed record StopPiiEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget63 XAmzTarget { get; init; }
}
