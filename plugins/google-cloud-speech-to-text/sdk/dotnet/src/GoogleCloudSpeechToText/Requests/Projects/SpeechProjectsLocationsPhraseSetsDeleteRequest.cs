namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsPhraseSetsDelete operation.
/// </summary>
public sealed record SpeechProjectsLocationsPhraseSetsDeleteRequest
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
    /// Resource name segment (phraseSetsId).
    /// </summary>
    public required string PhraseSetsId { get; init; }
}
