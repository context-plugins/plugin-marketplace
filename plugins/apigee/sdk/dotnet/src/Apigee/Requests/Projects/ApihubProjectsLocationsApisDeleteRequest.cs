namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApisDelete operation.
/// </summary>
public sealed record ApihubProjectsLocationsApisDeleteRequest
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
    /// Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request will only work if the API has no versions.
    /// </summary>
    public bool? Force { get; init; }
}
