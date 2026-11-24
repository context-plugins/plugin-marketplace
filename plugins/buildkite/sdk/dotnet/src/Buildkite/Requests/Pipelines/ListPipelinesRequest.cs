namespace Buildkite.Requests.Pipelines;

/// <summary>
/// The inputs of the ListPipelines operation.
/// </summary>
public sealed record ListPipelinesRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
