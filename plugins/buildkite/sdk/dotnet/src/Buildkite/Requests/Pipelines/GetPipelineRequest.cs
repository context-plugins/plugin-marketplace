namespace Buildkite.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipeline operation.
/// </summary>
public sealed record GetPipelineRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Pipeline slug
    /// </summary>
    public required string Pipeline { get; init; }
}
