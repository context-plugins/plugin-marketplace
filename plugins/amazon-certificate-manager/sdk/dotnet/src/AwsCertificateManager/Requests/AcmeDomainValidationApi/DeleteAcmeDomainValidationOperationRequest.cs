using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeDomainValidationApi;

/// <summary>
/// The inputs of the DeleteAcmeDomainValidation operation.
/// </summary>
public sealed record DeleteAcmeDomainValidationOperationRequest
{
    public required XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi XAmzTarget { get; init; }
}
