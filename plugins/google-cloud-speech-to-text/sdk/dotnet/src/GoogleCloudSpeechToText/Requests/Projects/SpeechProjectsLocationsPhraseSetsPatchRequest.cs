using GoogleCloudSpeechToText.Models;

namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsPhraseSetsPatch operation.
/// </summary>
public sealed record SpeechProjectsLocationsPhraseSetsPatchRequest
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

    /// <summary>
    /// The list of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required PhraseSet Body { get; init; }
}
