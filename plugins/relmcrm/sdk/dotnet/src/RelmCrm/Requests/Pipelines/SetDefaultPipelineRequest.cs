namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the SetDefaultPipeline operation.
/// </summary>
public sealed record SetDefaultPipelineRequest
{
    public required string Key { get; init; }
}
