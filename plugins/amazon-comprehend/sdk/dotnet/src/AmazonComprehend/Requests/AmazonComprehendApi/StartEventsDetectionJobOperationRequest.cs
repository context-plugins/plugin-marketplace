using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartEventsDetectionJob operation.
/// </summary>
public sealed record StartEventsDetectionJobOperationRequest
{
    public required XAmzTarget52 XAmzTarget { get; init; }
}
