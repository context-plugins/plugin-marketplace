using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsCreate operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsCreateRequest
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
    /// Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&amp;'()*+,;=@.
    /// </summary>
    public string? ConnectionId { get; init; }

    public required Connection Body { get; init; }
}
