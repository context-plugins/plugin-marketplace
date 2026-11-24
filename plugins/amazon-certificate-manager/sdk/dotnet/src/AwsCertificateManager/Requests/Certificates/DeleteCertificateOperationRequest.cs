using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the DeleteCertificate operation.
/// </summary>
public sealed record DeleteCertificateOperationRequest
{
    public required XAmzTargetAwsCertificateManagerCertificatesApi XAmzTarget { get; init; }
}
