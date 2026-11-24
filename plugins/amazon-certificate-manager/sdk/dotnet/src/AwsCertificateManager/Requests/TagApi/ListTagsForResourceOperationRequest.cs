using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Requests.TagApi;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public required XAmzTarget2AwsCertificateManagerTagApi XAmzTarget { get; init; }
}
