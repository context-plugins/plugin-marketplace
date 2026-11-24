namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsCustomClassesGet operation.
/// </summary>
public sealed record SpeechProjectsLocationsCustomClassesGetRequest
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
    /// Resource name segment (customClassesId).
    /// </summary>
    public required string CustomClassesId { get; init; }
}
