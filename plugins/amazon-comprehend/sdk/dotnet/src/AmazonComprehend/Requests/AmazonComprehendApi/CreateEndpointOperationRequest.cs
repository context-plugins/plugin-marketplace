using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the CreateEndpoint operation.
/// </summary>
public sealed record CreateEndpointOperationRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
