namespace Contentstack.Requests.Deployments;

/// <summary>
/// The inputs of the GetAllDeployments operation.
/// </summary>
public sealed record GetAllDeploymentsRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment environment.
    /// </summary>
    public required string EnvUid { get; init; }
}
