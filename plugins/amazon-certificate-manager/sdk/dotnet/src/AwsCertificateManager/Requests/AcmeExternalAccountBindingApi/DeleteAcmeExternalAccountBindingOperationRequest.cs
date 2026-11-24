using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

/// <summary>
/// The inputs of the DeleteAcmeExternalAccountBinding operation.
/// </summary>
public sealed record DeleteAcmeExternalAccountBindingOperationRequest
{
    public required XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi XAmzTarget { get; init; }
}
