using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartPiiEntitiesDetectionJob operation.
/// </summary>
public sealed record StartPiiEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget62 XAmzTarget { get; init; }
}
