namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesMigrationExecutionsGet operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest
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
    /// Resource name segment (servicesId).
    /// </summary>
    public required string ServicesId { get; init; }

    /// <summary>
    /// Resource name segment (migrationExecutionsId).
    /// </summary>
    public required string MigrationExecutionsId { get; init; }
}
