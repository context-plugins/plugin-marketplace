namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDeploymentsGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsDeploymentsGetRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (deploymentsId).
    /// </summary>
    public required string DeploymentsId { get; init; }
}
