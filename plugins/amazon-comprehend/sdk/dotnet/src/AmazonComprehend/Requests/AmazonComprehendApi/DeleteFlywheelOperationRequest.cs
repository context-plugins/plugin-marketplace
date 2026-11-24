using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DeleteFlywheel operation.
/// </summary>
public sealed record DeleteFlywheelOperationRequest
{
    public required XAmzTarget32 XAmzTarget { get; init; }
}
