namespace Buildkite.Requests.PipelineTemplates;

/// <summary>
/// The inputs of the ListPipelineTemplates operation.
/// </summary>
public sealed record ListPipelineTemplatesRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
