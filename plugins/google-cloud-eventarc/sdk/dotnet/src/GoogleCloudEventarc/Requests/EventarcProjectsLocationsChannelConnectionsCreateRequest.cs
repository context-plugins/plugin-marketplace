using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelConnectionsCreate operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelConnectionsCreateRequest
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
    /// Required. The user-provided ID to be assigned to the channel connection.
    /// </summary>
    public string? ChannelConnectionId { get; init; }

    public required ChannelConnection Body { get; init; }
}
