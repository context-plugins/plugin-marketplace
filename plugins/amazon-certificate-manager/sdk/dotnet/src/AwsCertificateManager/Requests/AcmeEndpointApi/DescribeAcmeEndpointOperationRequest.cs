using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeEndpointApi;

/// <summary>
/// The inputs of the DescribeAcmeEndpoint operation.
/// </summary>
public sealed record DescribeAcmeEndpointOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerAcmeEndpointApi XAmzTarget { get; init; }
}
