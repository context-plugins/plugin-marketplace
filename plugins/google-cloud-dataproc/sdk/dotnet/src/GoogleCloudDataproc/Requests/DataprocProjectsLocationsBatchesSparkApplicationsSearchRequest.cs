using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesSparkApplicationsSearch operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest
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
    /// Optional. Search only applications in the chosen state.
    /// </summary>
    public ApplicationStatus? ApplicationStatus { get; init; }

    /// <summary>
    /// Optional. Latest end timestamp to list.
    /// </summary>
    public string? MaxEndTime { get; init; }

    /// <summary>
    /// Optional. Latest start timestamp to list.
    /// </summary>
    public string? MaxTime { get; init; }

    /// <summary>
    /// Optional. Earliest end timestamp to list.
    /// </summary>
    public string? MinEndTime { get; init; }

    /// <summary>
    /// Optional. Earliest start timestamp to list.
    /// </summary>
    public string? MinTime { get; init; }

    /// <summary>
    /// Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
