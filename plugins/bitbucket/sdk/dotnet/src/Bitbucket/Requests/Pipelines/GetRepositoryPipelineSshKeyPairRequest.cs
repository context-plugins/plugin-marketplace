namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetRepositoryPipelineSshKeyPair operation.
/// </summary>
public sealed record GetRepositoryPipelineSshKeyPairRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }
}
