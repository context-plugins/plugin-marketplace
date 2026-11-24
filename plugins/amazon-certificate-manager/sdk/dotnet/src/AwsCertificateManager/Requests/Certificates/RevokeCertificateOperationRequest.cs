using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the RevokeCertificate operation.
/// </summary>
public sealed record RevokeCertificateOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
