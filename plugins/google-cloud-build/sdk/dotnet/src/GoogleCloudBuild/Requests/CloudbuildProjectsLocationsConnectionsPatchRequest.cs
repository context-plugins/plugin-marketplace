using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsPatch operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsPatchRequest
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
    /// If set to true, and the connection is not found a new connection will be created. In this situation <c>update_mask</c> is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.
    /// </summary>
    public string? Etag { get; init; }

    /// <summary>
    /// The list of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Connection Body { get; init; }
}
