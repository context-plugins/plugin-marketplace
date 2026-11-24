using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Certificates;

/// <summary>
/// The inputs of the ListCertificates operation.
/// </summary>
public sealed record ListCertificatesOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
