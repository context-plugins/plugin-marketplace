using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeDomainValidationApi;

/// <summary>
/// The inputs of the CreateAcmeDomainValidation operation.
/// </summary>
public sealed record CreateAcmeDomainValidationOperationRequest
{
    public required XAmzTargetAwsCertificateManagerAcmeDomainValidationApi XAmzTarget { get; init; }
}
