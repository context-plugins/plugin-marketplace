using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListFlywheels operation.
/// </summary>
public sealed record ListFlywheelsOperationRequest
{
    public required XAmzTarget34 XAmzTarget { get; init; }
}
