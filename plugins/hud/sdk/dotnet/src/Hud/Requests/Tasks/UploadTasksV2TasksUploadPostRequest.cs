using Hud.Models;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the UploadTasksV2TasksUploadPost operation.
/// </summary>
public sealed record UploadTasksV2TasksUploadPostRequest
{
    public required TaskUploadRequest Body { get; init; }
}
