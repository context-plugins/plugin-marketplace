namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsOperationsGet operation.
/// </summary>
public sealed record TranslateProjectsLocationsOperationsGetRequest
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
    /// Resource name segment (operationsId).
    /// </summary>
    public required string OperationsId { get; init; }
}
