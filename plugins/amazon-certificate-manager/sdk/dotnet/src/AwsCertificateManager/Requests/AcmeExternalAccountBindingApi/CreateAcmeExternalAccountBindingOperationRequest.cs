using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

/// <summary>
/// The inputs of the CreateAcmeExternalAccountBinding operation.
/// </summary>
public sealed record CreateAcmeExternalAccountBindingOperationRequest
{
    public required XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi XAmzTarget { get; init; }
}
