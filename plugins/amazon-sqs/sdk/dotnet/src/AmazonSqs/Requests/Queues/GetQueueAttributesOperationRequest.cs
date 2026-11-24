using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the GetQueueAttributes operation.
/// </summary>
public sealed record GetQueueAttributesOperationRequest
{
    public required XAmzTarget6AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
