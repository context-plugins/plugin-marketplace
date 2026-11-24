namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsDatasetsDelete operation.
/// </summary>
public sealed record TranslateProjectsLocationsDatasetsDeleteRequest
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
    /// Resource name segment (datasetsId).
    /// </summary>
    public required string DatasetsId { get; init; }
}
