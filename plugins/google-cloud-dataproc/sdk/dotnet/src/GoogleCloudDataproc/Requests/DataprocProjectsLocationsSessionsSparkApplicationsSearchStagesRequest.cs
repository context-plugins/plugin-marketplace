using System.Collections.Generic;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsSparkApplicationsSearchStages operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest
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
    /// Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Required. Parent (Session) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Optional. List of Stage IDs to filter by if provided.
    /// </summary>
    public IReadOnlyList<string>? StageIds { get; init; }

    /// <summary>
    /// Optional. List only stages in the given state.
    /// </summary>
    public StageStatus? StageStatus { get; init; }

    /// <summary>
    /// Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field
    /// </summary>
    public string? SummaryMetricsMask { get; init; }
}
