using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartFlywheelIteration operation.
/// </summary>
public sealed record StartFlywheelIterationOperationRequest
{
    public required XAmzTarget55 XAmzTarget { get; init; }
}
