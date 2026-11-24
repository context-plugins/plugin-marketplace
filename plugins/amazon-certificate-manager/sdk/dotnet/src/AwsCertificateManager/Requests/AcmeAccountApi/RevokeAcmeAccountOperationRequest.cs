using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeAccountApi;

/// <summary>
/// The inputs of the RevokeAcmeAccount operation.
/// </summary>
public sealed record RevokeAcmeAccountOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
