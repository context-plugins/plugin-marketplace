using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeFlywheelIteration operation.
/// </summary>
public sealed record DescribeFlywheelIterationOperationRequest
{
    public required XAmzTarget54 XAmzTarget { get; init; }
}
