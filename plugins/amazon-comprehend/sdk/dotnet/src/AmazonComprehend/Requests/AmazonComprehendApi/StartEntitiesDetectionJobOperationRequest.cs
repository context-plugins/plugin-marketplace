using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartEntitiesDetectionJob operation.
/// </summary>
public sealed record StartEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget48 XAmzTarget { get; init; }
}
