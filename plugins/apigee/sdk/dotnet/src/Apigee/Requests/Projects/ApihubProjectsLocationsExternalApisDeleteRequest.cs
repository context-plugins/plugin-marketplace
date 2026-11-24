namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsExternalApisDelete operation.
/// </summary>
public sealed record ApihubProjectsLocationsExternalApisDeleteRequest
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
    /// Resource name segment (externalApisId).
    /// </summary>
    public required string ExternalApisId { get; init; }
}
