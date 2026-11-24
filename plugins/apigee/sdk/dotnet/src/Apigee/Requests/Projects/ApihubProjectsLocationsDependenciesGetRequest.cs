namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDependenciesGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsDependenciesGetRequest
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
    /// Resource name segment (dependenciesId).
    /// </summary>
    public required string DependenciesId { get; init; }
}
