using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the UpdateCertificateOptions operation.
/// </summary>
public sealed record UpdateCertificateOptionsOperationRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
