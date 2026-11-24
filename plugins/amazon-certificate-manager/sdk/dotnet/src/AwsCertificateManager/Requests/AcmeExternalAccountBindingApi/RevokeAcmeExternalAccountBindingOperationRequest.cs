using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

/// <summary>
/// The inputs of the RevokeAcmeExternalAccountBinding operation.
/// </summary>
public sealed record RevokeAcmeExternalAccountBindingOperationRequest
{
    public required XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi XAmzTarget { get; init; }
}
