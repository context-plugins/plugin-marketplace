using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.Operations;

/// <summary>
/// The inputs of the ResendValidationEmail operation.
/// </summary>
public sealed record ResendValidationEmailOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerOperationsApi XAmzTarget { get; init; }
}
