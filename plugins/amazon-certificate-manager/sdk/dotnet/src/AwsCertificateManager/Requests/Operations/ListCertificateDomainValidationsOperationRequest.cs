using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the ListCertificateDomainValidations operation.
/// </summary>
public sealed record ListCertificateDomainValidationsOperationRequest
{
    public required XAmzTarget6AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
