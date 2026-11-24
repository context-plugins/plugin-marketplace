using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeDomainValidationApi;

/// <summary>
/// The inputs of the DescribeAcmeDomainValidation operation.
/// </summary>
public sealed record DescribeAcmeDomainValidationOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi XAmzTarget { get; init; }
}
