namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsFederationsGet operation.
/// </summary>
public sealed record MetastoreProjectsLocationsFederationsGetRequest
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
    /// Resource name segment (federationsId).
    /// </summary>
    public required string FederationsId { get; init; }
}
