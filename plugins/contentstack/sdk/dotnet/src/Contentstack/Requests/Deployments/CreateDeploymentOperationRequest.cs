using Contentstack.Models;

namespace Contentstack.Requests.Deployments;

/// <summary>
/// The inputs of the CreateDeployment operation.
/// </summary>
public sealed record CreateDeploymentOperationRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment environment.
    /// </summary>
    public required string EnvUid { get; init; }

    public required CreateDeploymentRequest Body { get; init; }
}
