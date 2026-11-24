using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the UntagQueue operation.
/// </summary>
public sealed record UntagQueueOperationRequest
{
    public required XAmzTarget4AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
