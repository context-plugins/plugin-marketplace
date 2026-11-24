namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsGeneratedSpecApisGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsGeneratedSpecApisGetRequest
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
    /// Resource name segment (generatedSpecApisId).
    /// </summary>
    public required string GeneratedSpecApisId { get; init; }
}
