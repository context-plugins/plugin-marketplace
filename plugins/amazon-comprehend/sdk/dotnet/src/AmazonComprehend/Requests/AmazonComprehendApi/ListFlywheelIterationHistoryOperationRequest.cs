using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListFlywheelIterationHistory operation.
/// </summary>
public sealed record ListFlywheelIterationHistoryOperationRequest
{
    public required XAmzTarget78 XAmzTarget { get; init; }
}
