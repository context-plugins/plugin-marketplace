using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest
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
    /// Resource name segment (databasesId).
    /// </summary>
    public required string DatabasesId { get; init; }

    /// <summary>
    /// Resource name segment (tablesId).
    /// </summary>
    public required string TablesId { get; init; }

    public required SetIamPolicyRequest2 Body { get; init; }
}
