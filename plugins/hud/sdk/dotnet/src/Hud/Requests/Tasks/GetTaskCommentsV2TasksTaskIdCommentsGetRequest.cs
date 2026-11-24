using System;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the GetTaskCommentsV2TasksTaskIdCommentsGet operation.
/// </summary>
public sealed record GetTaskCommentsV2TasksTaskIdCommentsGetRequest
{
    public required Guid TaskId { get; init; }
}
