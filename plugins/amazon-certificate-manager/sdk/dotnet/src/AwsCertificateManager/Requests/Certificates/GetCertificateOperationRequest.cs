using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the GetCertificate operation.
/// </summary>
public sealed record GetCertificateOperationRequest
{
    public required XAmzTarget3AwsCertificateManagerCertificatesApi XAmzTarget { get; init; }
}
