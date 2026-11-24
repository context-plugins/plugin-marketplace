using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the TagQueue operation.
/// </summary>
public sealed record TagQueueOperationRequest
{
    public required XAmzTarget3AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
