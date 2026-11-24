using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeEndpointApi;

/// <summary>
/// The inputs of the UpdateAcmeEndpoint operation.
/// </summary>
public sealed record UpdateAcmeEndpointOperationRequest
{
    public required XAmzTarget4AwsCertificateManagerAcmeEndpointApi XAmzTarget { get; init; }
}
