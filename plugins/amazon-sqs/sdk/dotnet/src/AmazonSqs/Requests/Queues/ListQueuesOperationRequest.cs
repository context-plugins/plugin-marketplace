using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the ListQueues operation.
/// </summary>
public sealed record ListQueuesOperationRequest
{
    public required XAmzTarget2AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
