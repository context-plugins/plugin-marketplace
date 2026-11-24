using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the StartMessageMoveTask operation.
/// </summary>
public sealed record StartMessageMoveTaskOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
