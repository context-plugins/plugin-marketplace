using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribePiiEntitiesDetectionJob operation.
/// </summary>
public sealed record DescribePiiEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget60 XAmzTarget { get; init; }
}
