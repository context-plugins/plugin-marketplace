using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the SearchCertificates operation.
/// </summary>
public sealed record SearchCertificatesOperationRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
