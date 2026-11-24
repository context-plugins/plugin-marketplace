using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeFlywheel operation.
/// </summary>
public sealed record DescribeFlywheelOperationRequest
{
    public required XAmzTarget33 XAmzTarget { get; init; }
}
