namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsHostProjectRegistrationsGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsHostProjectRegistrationsGetRequest
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
    /// Resource name segment (hostProjectRegistrationsId).
    /// </summary>
    public required string HostProjectRegistrationsId { get; init; }
}
