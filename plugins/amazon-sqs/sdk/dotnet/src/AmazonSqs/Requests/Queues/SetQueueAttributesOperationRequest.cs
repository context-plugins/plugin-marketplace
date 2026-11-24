using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Queues;

/// <summary>
/// The inputs of the SetQueueAttributes operation.
/// </summary>
public sealed record SetQueueAttributesOperationRequest
{
    public required XAmzTarget7AmazonSimpleQueueServiceQueuesApi XAmzTarget { get; init; }
}
