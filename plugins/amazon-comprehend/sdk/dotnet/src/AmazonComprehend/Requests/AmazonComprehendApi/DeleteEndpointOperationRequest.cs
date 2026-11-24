using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DeleteEndpoint operation.
/// </summary>
public sealed record DeleteEndpointOperationRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
