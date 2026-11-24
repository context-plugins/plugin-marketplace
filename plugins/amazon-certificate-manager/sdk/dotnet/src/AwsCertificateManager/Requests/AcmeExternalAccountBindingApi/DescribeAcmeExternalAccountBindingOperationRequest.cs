using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

/// <summary>
/// The inputs of the DescribeAcmeExternalAccountBinding operation.
/// </summary>
public sealed record DescribeAcmeExternalAccountBindingOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi XAmzTarget { get; init; }
}
