using GoogleCloudSpeechToText.Models;

namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsCustomClassesPatch operation.
/// </summary>
public sealed record SpeechProjectsLocationsCustomClassesPatchRequest
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

    /// <summary>
    /// The list of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required CustomClass Body { get; init; }
}
