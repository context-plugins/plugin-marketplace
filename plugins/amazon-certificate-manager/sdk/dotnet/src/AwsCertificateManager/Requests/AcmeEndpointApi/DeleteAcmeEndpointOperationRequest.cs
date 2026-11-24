using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeEndpointApi;

/// <summary>
/// The inputs of the DeleteAcmeEndpoint operation.
/// </summary>
public sealed record DeleteAcmeEndpointOperationRequest
{
    public required XAmzTarget1AwsCertificateManagerAcmeEndpointApi XAmzTarget { get; init; }
}
