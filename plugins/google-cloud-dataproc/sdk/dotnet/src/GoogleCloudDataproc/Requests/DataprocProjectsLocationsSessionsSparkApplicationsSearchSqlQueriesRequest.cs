using System.Collections.Generic;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest
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
    /// Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
    /// </summary>
    public bool? Details { get; init; }

    /// <summary>
    /// Optional. List of Spark Connect operation IDs to filter by if provided.
    /// </summary>
    public IReadOnlyList<string>? OperationIds { get; init; }

    /// <summary>
    /// Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Required. Parent (Session) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Optional. Enables/ disables physical plan description on demand
    /// </summary>
    public bool? PlanDescription { get; init; }
}
