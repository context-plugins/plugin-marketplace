using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsDetectLanguage operation.
/// </summary>
public sealed record TranslateProjectsDetectLanguageRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    public required DetectLanguageRequest Body { get; init; }
}
