using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Tags;

/// <summary>
/// The inputs of the ListQueueTags operation.
/// </summary>
public sealed record ListQueueTagsOperationRequest
{
    public required XAmzTarget2AmazonSimpleQueueServiceTagsApi XAmzTarget { get; init; }
}
