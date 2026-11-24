using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the CreateQueue operation.
/// </summary>
public sealed record CreateQueueOperationRequest
{
    public required XAmzTargetAmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
