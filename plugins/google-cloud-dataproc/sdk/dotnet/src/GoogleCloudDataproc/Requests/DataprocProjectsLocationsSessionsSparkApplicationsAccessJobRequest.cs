namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsSparkApplicationsAccessJob operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest
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
    /// Resource name segment (sessionsId).
    /// </summary>
    public required string SessionsId { get; init; }

    /// <summary>
    /// Resource name segment (sparkApplicationsId).
    /// </summary>
    public required string SparkApplicationsId { get; init; }

    /// <summary>
    /// Required. Job ID to fetch data for.
    /// </summary>
    public string? JobId { get; init; }

    /// <summary>
    /// Required. Parent (Session) resource reference.
    /// </summary>
    public string? Parent { get; init; }
}
