using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Deployments;

/// <summary>
/// The inputs of the CreateEnvironment operation.
/// </summary>
public sealed record CreateEnvironmentRequest
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
    /// The environment to create.
    /// </summary>
    public required DeploymentEnvironment Body { get; init; }
}
