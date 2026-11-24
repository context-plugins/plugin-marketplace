using System;

namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the GetTasksetV2TasksetsTasksetIdGet operation.
/// </summary>
public sealed record GetTasksetV2TasksetsTasksetIdGetRequest
{
    public required Guid TasksetId { get; init; }
}
