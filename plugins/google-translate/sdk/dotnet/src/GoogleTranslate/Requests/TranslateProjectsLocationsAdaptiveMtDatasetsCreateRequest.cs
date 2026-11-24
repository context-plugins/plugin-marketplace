using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsAdaptiveMtDatasetsCreate operation.
/// </summary>
public sealed record TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required AdaptiveMtDataset Body { get; init; }
}
