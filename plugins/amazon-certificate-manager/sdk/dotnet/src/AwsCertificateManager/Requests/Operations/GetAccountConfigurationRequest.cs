using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the GetAccountConfiguration operation.
/// </summary>
public sealed record GetAccountConfigurationRequest
{
    public required XAmzTarget3AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
