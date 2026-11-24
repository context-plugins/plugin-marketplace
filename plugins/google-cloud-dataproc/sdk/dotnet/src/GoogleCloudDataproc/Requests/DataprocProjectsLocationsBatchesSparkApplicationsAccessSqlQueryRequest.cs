namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest
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
    /// Resource name segment (batchesId).
    /// </summary>
    public required string BatchesId { get; init; }

    /// <summary>
    /// Resource name segment (sparkApplicationsId).
    /// </summary>
    public required string SparkApplicationsId { get; init; }

    /// <summary>
    /// Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
    /// </summary>
    public bool? Details { get; init; }

    /// <summary>
    /// Required. Execution ID
    /// </summary>
    public string? ExecutionId { get; init; }

    /// <summary>
    /// Required. Parent (Batch) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Optional. Enables/ disables physical plan description on demand
    /// </summary>
    public bool? PlanDescription { get; init; }
}
