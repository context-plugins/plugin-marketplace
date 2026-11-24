namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeleteRepositoryPipelineCache operation.
/// </summary>
public sealed record DeleteRepositoryPipelineCacheRequest
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
    /// The UUID of the cache to delete.
    /// </summary>
    public required string CacheUuid { get; init; }
}
