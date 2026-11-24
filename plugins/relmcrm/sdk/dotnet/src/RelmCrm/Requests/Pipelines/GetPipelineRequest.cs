namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipeline operation.
/// </summary>
public sealed record GetPipelineRequest
{
    /// <summary>
    /// Pipeline key or pl_ id.
    /// </summary>
    public required string Key { get; init; }
}
