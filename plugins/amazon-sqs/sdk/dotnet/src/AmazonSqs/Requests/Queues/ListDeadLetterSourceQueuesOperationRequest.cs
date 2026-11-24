using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the ListDeadLetterSourceQueues operation.
/// </summary>
public sealed record ListDeadLetterSourceQueuesOperationRequest
{
    public required XAmzTarget9AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
