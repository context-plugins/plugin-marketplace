namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsGet operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsGetRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }
}
