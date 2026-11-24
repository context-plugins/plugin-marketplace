namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the DeletePipeline operation.
/// </summary>
public sealed record DeletePipelineRequest
{
    /// <summary>
    /// Pipeline key or pl_ id.
    /// </summary>
    public required string Key { get; init; }
}
