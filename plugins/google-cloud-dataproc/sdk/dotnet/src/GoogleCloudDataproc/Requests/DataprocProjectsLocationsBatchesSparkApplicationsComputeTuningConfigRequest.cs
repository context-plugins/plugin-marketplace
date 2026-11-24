namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest
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
    /// Required. Spark execution ID for the query.
    /// </summary>
    public string? ExecutionId { get; init; }

    /// <summary>
    /// Required. Parent (Batch) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Required. Spark semantic query ID.
    /// </summary>
    public string? SemanticQueryId { get; init; }
}
