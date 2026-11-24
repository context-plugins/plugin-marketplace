using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the ChangeMessageVisibilityBatch operation.
/// </summary>
public sealed record ChangeMessageVisibilityBatchOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
