using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile operation.
/// </summary>
public sealed record TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest
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
    /// Resource name segment (adaptiveMtDatasetsId).
    /// </summary>
    public required string AdaptiveMtDatasetsId { get; init; }

    public required ImportAdaptiveMtFileRequest Body { get; init; }
}
