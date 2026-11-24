using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeDomainValidationApi;

/// <summary>
/// The inputs of the ListAcmeDomainValidations operation.
/// </summary>
public sealed record ListAcmeDomainValidationsOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
