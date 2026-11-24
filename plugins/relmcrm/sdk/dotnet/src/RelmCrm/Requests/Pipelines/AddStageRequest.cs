using RelmCrm.Models;

namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the AddStage operation.
/// </summary>
public sealed record AddStageRequest
{
    public required string Key { get; init; }

    public required PipelinesStagesRequest Body { get; init; }
}
