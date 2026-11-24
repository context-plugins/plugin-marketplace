namespace Bitbucket.Requests.Deployments;

/// <summary>
/// The inputs of the GetDeploymentsForRepository operation.
/// </summary>
public sealed record GetDeploymentsForRepositoryRequest
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
