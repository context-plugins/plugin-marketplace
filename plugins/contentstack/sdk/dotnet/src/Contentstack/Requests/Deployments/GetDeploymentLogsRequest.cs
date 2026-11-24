namespace Contentstack.Requests.Deployments;

/// <summary>
/// The inputs of the GetDeploymentLogs operation.
/// </summary>
public sealed record GetDeploymentLogsRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment environment.
    /// </summary>
    public required string EnvUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment.
    /// </summary>
    public required string DeployUid { get; init; }
}
