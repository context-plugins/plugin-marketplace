namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsGlossariesGlossaryEntriesDelete operation.
/// </summary>
public sealed record TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest
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

    /// <summary>
    /// Resource name segment (glossaryEntriesId).
    /// </summary>
    public required string GlossaryEntriesId { get; init; }
}
