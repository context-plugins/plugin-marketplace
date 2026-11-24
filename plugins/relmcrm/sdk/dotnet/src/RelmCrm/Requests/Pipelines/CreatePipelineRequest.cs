using RelmCrm.Models;

namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the CreatePipeline operation.
/// </summary>
public sealed record CreatePipelineRequest
{
    public required PipelineInput Body { get; init; }
}
