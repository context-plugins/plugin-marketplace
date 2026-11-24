using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the CancelMessageMoveTask operation.
/// </summary>
public sealed record CancelMessageMoveTaskOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
