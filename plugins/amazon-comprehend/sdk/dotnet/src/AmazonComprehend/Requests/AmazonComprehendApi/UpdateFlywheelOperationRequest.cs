using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the UpdateFlywheel operation.
/// </summary>
public sealed record UpdateFlywheelOperationRequest
{
    public required XAmzTarget35 XAmzTarget { get; init; }
}
