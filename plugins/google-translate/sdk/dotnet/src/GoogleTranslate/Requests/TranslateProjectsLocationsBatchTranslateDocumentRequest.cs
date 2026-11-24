using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsBatchTranslateDocument operation.
/// </summary>
public sealed record TranslateProjectsLocationsBatchTranslateDocumentRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required BatchTranslateDocumentRequest Body { get; init; }
}
