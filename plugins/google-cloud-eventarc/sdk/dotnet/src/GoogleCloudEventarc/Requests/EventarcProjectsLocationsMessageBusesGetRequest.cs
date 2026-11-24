namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsMessageBusesGet operation.
/// </summary>
public sealed record EventarcProjectsLocationsMessageBusesGetRequest
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
    /// Resource name segment (messageBusesId).
    /// </summary>
    public required string MessageBusesId { get; init; }
}
