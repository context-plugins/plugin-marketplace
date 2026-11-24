using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the RequestCertificate2 operation.
/// </summary>
public sealed record RequestCertificate2Request
{
    public required XAmzTarget1AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
