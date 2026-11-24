namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest
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
    /// Required. Parent (Batch) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Required. Stage Attempt ID
    /// </summary>
    public int? StageAttemptId { get; init; }

    /// <summary>
    /// Required. Stage ID
    /// </summary>
    public string? StageId { get; init; }
}
