using Hud.Models;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the BulkUpdateTaskStatusV2TasksStatusPatch operation.
/// </summary>
public sealed record BulkUpdateTaskStatusV2TasksStatusPatchRequest
{
    public required BulkStatusRequest Body { get; init; }
}
