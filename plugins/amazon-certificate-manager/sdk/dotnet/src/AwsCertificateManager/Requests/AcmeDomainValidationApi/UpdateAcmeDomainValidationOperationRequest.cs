using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeDomainValidationApi;

/// <summary>
/// The inputs of the UpdateAcmeDomainValidation operation.
/// </summary>
public sealed record UpdateAcmeDomainValidationOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
