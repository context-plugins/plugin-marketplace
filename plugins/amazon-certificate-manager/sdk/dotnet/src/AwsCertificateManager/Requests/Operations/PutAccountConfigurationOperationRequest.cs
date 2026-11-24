using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the PutAccountConfiguration operation.
/// </summary>
public sealed record PutAccountConfigurationOperationRequest
{
    public required XAmzTarget4AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
