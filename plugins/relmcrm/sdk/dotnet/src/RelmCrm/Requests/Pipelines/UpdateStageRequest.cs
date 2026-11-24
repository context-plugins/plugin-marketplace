using RelmCrm.Models;

namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdateStage operation.
/// </summary>
public sealed record UpdateStageRequest
{
    public required string Key { get; init; }

    public required string Stage { get; init; }

    public required PipelinesStagesRequest1 Body { get; init; }
}
