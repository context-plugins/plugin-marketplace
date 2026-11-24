using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Tags;

/// <summary>
/// The inputs of the UntagQueue2 operation.
/// </summary>
public sealed record UntagQueue2Request
{
    public required XAmzTarget1AmazonSimpleQueueServiceTagsApi XAmzTarget { get; init; }
}
