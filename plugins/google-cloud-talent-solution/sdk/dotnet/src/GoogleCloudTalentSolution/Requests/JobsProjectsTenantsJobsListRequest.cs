using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsList operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    /// <summary>
    /// Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * <c>companyName</c> * <c>requisitionId</c> * <c>status</c> Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of <c>companyName</c> and <c>requisitionId</c> must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.
    /// </summary>
    public JobView1? JobView { get; init; }

    /// <summary>
    /// The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number &lt; 1 is specified.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The starting point of a query result.
    /// </summary>
    public string? PageToken { get; init; }
}
