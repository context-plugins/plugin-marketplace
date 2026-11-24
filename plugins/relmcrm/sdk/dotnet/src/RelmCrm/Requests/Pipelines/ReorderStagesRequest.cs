using RelmCrm.Models;

namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the ReorderStages operation.
/// </summary>
public sealed record ReorderStagesRequest
{
    public required string Key { get; init; }

    public required PipelinesStagesReorderRequest Body { get; init; }
}
