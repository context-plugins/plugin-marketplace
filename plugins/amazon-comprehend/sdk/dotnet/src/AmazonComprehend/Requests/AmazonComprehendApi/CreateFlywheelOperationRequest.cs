using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the CreateFlywheel operation.
/// </summary>
public sealed record CreateFlywheelOperationRequest
{
    public required XAmzTarget31 XAmzTarget { get; init; }
}
