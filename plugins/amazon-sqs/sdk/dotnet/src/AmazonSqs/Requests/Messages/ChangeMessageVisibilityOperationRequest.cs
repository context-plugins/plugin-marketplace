using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the ChangeMessageVisibility operation.
/// </summary>
public sealed record ChangeMessageVisibilityOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
