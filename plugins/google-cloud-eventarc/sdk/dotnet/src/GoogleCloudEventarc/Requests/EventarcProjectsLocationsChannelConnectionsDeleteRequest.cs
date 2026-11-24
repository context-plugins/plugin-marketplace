namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelConnectionsDelete operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelConnectionsDeleteRequest
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
    /// Resource name segment (channelConnectionsId).
    /// </summary>
    public required string ChannelConnectionsId { get; init; }
}
