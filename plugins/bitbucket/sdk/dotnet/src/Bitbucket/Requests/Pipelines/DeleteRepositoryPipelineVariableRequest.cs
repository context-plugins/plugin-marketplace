namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeleteRepositoryPipelineVariable operation.
/// </summary>
public sealed record DeleteRepositoryPipelineVariableRequest
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
    /// The UUID of the variable to delete.
    /// </summary>
    public required string VariableUuid { get; init; }
}
