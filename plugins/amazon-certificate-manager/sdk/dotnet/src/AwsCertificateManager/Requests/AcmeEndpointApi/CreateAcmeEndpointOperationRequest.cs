using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeEndpointApi;

/// <summary>
/// The inputs of the CreateAcmeEndpoint operation.
/// </summary>
public sealed record CreateAcmeEndpointOperationRequest
{
    public required XAmzTargetAwsCertificateManagerAcmeEndpointApi XAmzTarget { get; init; }
}
