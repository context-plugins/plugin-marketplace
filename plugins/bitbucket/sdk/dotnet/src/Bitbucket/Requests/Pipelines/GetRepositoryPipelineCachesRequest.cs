namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetRepositoryPipelineCaches operation.
/// </summary>
public sealed record GetRepositoryPipelineCachesRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }
}
