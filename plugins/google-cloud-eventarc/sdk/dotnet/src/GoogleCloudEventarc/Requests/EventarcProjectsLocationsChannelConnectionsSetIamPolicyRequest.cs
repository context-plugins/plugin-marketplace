using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelConnectionsSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest
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

    public required SetIamPolicyRequest Body { get; init; }
}
