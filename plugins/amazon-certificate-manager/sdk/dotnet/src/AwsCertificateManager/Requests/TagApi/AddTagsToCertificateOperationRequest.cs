using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.TagApi;

/// <summary>
/// The inputs of the AddTagsToCertificate operation.
/// </summary>
public sealed record AddTagsToCertificateOperationRequest
{
    public required XAmzTargetAwsCertificateManagerTagApi XAmzTarget { get; init; }
}
