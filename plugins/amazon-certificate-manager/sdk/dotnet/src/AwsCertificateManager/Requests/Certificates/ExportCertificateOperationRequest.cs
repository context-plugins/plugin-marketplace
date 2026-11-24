using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the ExportCertificate operation.
/// </summary>
public sealed record ExportCertificateOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerCertificatesApi XAmzTarget { get; init; }
}
