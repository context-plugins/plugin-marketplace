using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the ListMessageMoveTasks operation.
/// </summary>
public sealed record ListMessageMoveTasksOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
