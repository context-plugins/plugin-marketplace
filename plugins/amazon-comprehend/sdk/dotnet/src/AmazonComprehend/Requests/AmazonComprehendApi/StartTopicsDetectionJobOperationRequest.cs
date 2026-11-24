using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartTopicsDetectionJob operation.
/// </summary>
public sealed record StartTopicsDetectionJobOperationRequest
{
    public required XAmzTarget74 XAmzTarget { get; init; }
}
