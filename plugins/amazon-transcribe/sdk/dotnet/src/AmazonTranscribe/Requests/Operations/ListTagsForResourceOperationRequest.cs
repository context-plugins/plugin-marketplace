using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceOperationsApi XAmzTarget { get; init; }
}
