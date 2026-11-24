using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required XAmzTarget7AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
