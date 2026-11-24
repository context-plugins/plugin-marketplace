namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelineStepForRepository operation.
/// </summary>
public sealed record GetPipelineStepForRepositoryRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The UUID of the pipeline.
    /// </summary>
    public required string PipelineUuid { get; init; }

    /// <summary>
    /// The UUID of the step.
    /// </summary>
    public required string StepUuid { get; init; }
}
