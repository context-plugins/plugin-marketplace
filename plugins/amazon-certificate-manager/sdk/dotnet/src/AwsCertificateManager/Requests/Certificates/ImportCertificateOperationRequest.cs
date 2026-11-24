using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the ImportCertificate operation.
/// </summary>
public sealed record ImportCertificateOperationRequest
{
    public required XAmzTarget4AwsCertificateManagerCertificatesApi XAmzTarget { get; init; }
}
