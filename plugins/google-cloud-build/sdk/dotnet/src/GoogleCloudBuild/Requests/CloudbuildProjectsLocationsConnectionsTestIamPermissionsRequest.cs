using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsTestIamPermissions operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest
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
    /// Resource name segment (connectionsId).
    /// </summary>
    public required string ConnectionsId { get; init; }

    public required TestIamPermissionsRequest Body { get; init; }
}
