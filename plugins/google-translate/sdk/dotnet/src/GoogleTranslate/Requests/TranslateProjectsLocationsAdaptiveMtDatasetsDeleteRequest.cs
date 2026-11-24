namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsAdaptiveMtDatasetsDelete operation.
/// </summary>
public sealed record TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest
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
}
