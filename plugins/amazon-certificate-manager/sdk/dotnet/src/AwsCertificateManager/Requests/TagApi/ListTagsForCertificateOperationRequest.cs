using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.TagApi;

/// <summary>
/// The inputs of the ListTagsForCertificate operation.
/// </summary>
public sealed record ListTagsForCertificateOperationRequest
{
    public required XAmzTarget1AwsCertificateManagerTagApi XAmzTarget { get; init; }
}
