using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the DeleteQueue operation.
/// </summary>
public sealed record DeleteQueueOperationRequest
{
    public required XAmzTarget1AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
