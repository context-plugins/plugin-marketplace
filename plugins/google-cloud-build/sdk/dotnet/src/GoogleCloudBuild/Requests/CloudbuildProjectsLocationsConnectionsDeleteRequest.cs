namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsDelete operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsDeleteRequest
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

    /// <summary>
    /// The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.
    /// </summary>
    public string? Etag { get; init; }

    /// <summary>
    /// If set, validate the request, but do not actually post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }
}
