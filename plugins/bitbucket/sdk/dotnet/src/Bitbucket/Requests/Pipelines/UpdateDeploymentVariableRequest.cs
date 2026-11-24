using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdateDeploymentVariable operation.
/// </summary>
public sealed record UpdateDeploymentVariableRequest
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
    /// The environment.
    /// </summary>
    public required string EnvironmentUuid { get; init; }

    /// <summary>
    /// The UUID of the variable to update.
    /// </summary>
    public required string VariableUuid { get; init; }

    /// <summary>
    /// The updated deployment variable.
    /// </summary>
    public required DeploymentVariable Body { get; init; }
}
