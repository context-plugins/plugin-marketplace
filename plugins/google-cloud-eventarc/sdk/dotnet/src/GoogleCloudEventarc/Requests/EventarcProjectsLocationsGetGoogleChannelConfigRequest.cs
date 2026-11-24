namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsGetGoogleChannelConfig operation.
/// </summary>
public sealed record EventarcProjectsLocationsGetGoogleChannelConfigRequest
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
