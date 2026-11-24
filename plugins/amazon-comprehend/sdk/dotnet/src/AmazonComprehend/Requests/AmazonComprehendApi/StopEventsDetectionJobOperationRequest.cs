using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopEventsDetectionJob operation.
/// </summary>
public sealed record StopEventsDetectionJobOperationRequest
{
    public required XAmzTarget53 XAmzTarget { get; init; }
}
