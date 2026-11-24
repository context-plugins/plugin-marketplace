using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelsSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelsSetIamPolicyRequest
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

    public required SetIamPolicyRequest Body { get; init; }
}
