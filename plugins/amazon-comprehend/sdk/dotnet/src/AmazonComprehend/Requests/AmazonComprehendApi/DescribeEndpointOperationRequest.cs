using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeEndpoint operation.
/// </summary>
public sealed record DescribeEndpointOperationRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
