using RelmCrm.Models;

namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdatePipeline operation.
/// </summary>
public sealed record UpdatePipelineRequest
{
    /// <summary>
    /// Pipeline key or pl_ id.
    /// </summary>
    public required string Key { get; init; }

    public required PipelinesRequest Body { get; init; }
}
