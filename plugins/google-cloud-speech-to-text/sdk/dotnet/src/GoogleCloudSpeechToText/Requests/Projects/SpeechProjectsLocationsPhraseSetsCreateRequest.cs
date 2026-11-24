using GoogleCloudSpeechToText.Models;

namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsPhraseSetsCreate operation.
/// </summary>
public sealed record SpeechProjectsLocationsPhraseSetsCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required CreatePhraseSetRequest Body { get; init; }
}
