using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the DeleteMessageBatch operation.
/// </summary>
public sealed record DeleteMessageBatchOperationRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
