using Hud.Models;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the BulkUpdateTaskStageV2TasksStagePatch operation.
/// </summary>
public sealed record BulkUpdateTaskStageV2TasksStagePatchRequest
{
    public required BulkStageRequest Body { get; init; }
}
