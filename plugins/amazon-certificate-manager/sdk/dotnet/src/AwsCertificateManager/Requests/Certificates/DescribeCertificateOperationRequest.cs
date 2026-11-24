using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the DescribeCertificate operation.
/// </summary>
public sealed record DescribeCertificateOperationRequest
{
    public required XAmzTarget1AwsCertificateManagerCertificatesApi XAmzTarget { get; init; }
}
