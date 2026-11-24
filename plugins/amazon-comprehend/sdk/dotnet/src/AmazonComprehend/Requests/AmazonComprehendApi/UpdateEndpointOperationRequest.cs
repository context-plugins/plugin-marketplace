using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the UpdateEndpoint operation.
/// </summary>
public sealed record UpdateEndpointOperationRequest
{
    public required XAmzTarget26 XAmzTarget { get; init; }
}
