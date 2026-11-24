using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the RenewCertificate operation.
/// </summary>
public sealed record RenewCertificateOperationRequest
{
    public required XAmzTargetAwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
