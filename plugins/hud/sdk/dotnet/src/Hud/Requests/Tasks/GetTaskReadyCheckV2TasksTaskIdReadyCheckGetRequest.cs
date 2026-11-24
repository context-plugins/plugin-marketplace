using System;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the GetTaskReadyCheckV2TasksTaskIdReadyCheckGet operation.
/// </summary>
public sealed record GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest
{
    public required Guid TaskId { get; init; }
}
