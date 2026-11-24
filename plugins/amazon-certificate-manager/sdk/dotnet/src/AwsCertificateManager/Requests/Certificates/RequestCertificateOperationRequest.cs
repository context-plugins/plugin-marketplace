using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the RequestCertificate operation.
/// </summary>
public sealed record RequestCertificateOperationRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
