using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Tags;

/// <summary>
/// The inputs of the TagQueue2 operation.
/// </summary>
public sealed record TagQueue2Request
{
    public required XAmzTargetAmazonSimpleQueueServiceTagsApi XAmzTarget { get; init; }
}
