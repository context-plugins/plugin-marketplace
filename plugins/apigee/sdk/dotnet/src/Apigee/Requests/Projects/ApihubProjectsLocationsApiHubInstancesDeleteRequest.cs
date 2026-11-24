namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApiHubInstancesDelete operation.
/// </summary>
public sealed record ApihubProjectsLocationsApiHubInstancesDeleteRequest
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
    /// Resource name segment (apiHubInstancesId).
    /// </summary>
    public required string ApiHubInstancesId { get; init; }
}
