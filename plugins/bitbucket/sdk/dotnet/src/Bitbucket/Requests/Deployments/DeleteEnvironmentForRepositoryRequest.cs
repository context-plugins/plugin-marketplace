namespace Bitbucket.Requests.Deployments;

/// <summary>
/// The inputs of the DeleteEnvironmentForRepository operation.
/// </summary>
public sealed record DeleteEnvironmentForRepositoryRequest
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
    /// The environment UUID.
    /// </summary>
    public required string EnvironmentUuid { get; init; }
}
