using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsDetectLanguage operation.
/// </summary>
public sealed record TranslateProjectsLocationsDetectLanguageRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required DetectLanguageRequest Body { get; init; }
}
