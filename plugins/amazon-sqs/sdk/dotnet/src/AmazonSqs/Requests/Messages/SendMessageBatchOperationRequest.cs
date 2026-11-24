using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the SendMessageBatch operation.
/// </summary>
public sealed record SendMessageBatchOperationRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
