using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the GetAcmeExternalAccountBindingCredentials operation.
/// </summary>
public sealed record GetAcmeExternalAccountBindingCredentialsOperationRequest
{
    public required XAmzTarget5AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
