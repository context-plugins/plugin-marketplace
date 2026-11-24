using Hud.Models;

namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the CreateTasksetV2TasksetsPost operation.
/// </summary>
public sealed record CreateTasksetV2TasksetsPostRequest
{
    public required TasksetCreateRequest Body { get; init; }
}
