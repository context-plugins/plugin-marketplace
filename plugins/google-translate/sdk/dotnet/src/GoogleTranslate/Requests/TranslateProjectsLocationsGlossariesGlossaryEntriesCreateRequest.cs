using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsGlossariesGlossaryEntriesCreate operation.
/// </summary>
public sealed record TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest
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
    /// Resource name segment (glossariesId).
    /// </summary>
    public required string GlossariesId { get; init; }

    public required GlossaryEntry Body { get; init; }
}
