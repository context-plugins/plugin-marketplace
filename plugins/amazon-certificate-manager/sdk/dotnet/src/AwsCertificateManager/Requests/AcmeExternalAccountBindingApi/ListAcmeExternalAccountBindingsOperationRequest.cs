using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

/// <summary>
/// The inputs of the ListAcmeExternalAccountBindings operation.
/// </summary>
public sealed record ListAcmeExternalAccountBindingsOperationRequest
{
    public required XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi XAmzTarget { get; init; }
}
