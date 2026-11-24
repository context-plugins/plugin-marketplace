using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsRomanizeText operation.
/// </summary>
public sealed record TranslateProjectsRomanizeTextRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    public required RomanizeTextRequest Body { get; init; }
}
