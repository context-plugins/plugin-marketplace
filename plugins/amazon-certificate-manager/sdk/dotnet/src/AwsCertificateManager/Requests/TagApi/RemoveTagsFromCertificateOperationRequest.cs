using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.TagApi;

/// <summary>
/// The inputs of the RemoveTagsFromCertificate operation.
/// </summary>
public sealed record RemoveTagsFromCertificateOperationRequest
{
    public required XAmzTarget3AwsCertificateManagerTagApi XAmzTarget { get; init; }
}
