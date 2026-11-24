using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the PurgeQueue operation.
/// </summary>
public sealed record PurgeQueueOperationRequest
{
    public required XAmzTarget5AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
