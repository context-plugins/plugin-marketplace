using GoogleTranslate.Models;

namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsDatasetsExportData operation.
/// </summary>
public sealed record TranslateProjectsLocationsDatasetsExportDataRequest
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

    public required ExportDataRequest Body { get; init; }
}
