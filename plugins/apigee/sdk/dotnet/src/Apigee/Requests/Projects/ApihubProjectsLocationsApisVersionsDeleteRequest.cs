namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisVersionsDelete operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisVersionsDeleteRequest
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
    /// Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request will only work if the version has no specs.
    /// </summary>
    public bool? Force { get; init; }
}
