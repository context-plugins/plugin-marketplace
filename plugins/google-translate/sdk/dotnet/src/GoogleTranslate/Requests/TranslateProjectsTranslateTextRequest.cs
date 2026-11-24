using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsTranslateText operation.
/// </summary>
public sealed record TranslateProjectsTranslateTextRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    public required TranslateTextRequest Body { get; init; }
}
