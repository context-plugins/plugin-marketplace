using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the GetQueueUrl operation.
/// </summary>
public sealed record GetQueueUrlOperationRequest
{
    public required XAmzTarget8AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
