namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsSpecsGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsSpecsGetRequest
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
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (versionsId).
    /// </summary>
    public required string VersionsId { get; init; }

    /// <summary>
    /// Resource name segment (specsId).
    /// </summary>
    public required string SpecsId { get; init; }
}
