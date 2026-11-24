using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelsTestIamPermissions operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelsTestIamPermissionsRequest
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
    /// Resource name segment (channelsId).
    /// </summary>
    public required string ChannelsId { get; init; }

    public required TestIamPermissionsRequest Body { get; init; }
}
