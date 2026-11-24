using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeEndpointApi;

/// <summary>
/// The inputs of the ListAcmeEndpoints operation.
/// </summary>
public sealed record ListAcmeEndpointsOperationRequest
{
    public required XAmzTarget3AwsCertificateManagerAcmeEndpointApi XAmzTarget { get; init; }
}
