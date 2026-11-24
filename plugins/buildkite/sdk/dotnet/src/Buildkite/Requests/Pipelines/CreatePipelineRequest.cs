using Buildkite.Models;

namespace Buildkite.Requests.Pipelines;

/// <summary>
/// The inputs of the CreatePipeline operation.
/// </summary>
public sealed record CreatePipelineRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    public Pipeline? Body { get; init; }
}
