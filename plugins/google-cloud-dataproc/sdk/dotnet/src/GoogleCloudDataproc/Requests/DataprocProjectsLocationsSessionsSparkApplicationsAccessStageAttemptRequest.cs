namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest
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
    /// Required. Parent (Session) resource reference.
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

    /// <summary>
    /// Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
    /// </summary>
    public string? SummaryMetricsMask { get; init; }
}
