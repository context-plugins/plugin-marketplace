using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsGlossariesPatch operation.
/// </summary>
public sealed record TranslateProjectsLocationsGlossariesPatchRequest
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
    /// The list of fields to be updated. Currently, only <c>display_name</c> and <c>input_config</c> are supported.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Glossary Body { get; init; }
}
