using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListEndpoints operation.
/// </summary>
public sealed record ListEndpointsOperationRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
