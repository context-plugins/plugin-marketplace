namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeleteRepositoryPipelineCaches operation.
/// </summary>
public sealed record DeleteRepositoryPipelineCachesRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The cache name.
    /// </summary>
    public required string Name { get; init; }
}
