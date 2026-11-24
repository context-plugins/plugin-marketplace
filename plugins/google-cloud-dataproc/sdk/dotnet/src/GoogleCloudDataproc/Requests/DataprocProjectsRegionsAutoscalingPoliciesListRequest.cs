namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsAutoscalingPoliciesList operation.
/// </summary>
public sealed record DataprocProjectsRegionsAutoscalingPoliciesListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The page token, returned by a previous call, to request the next page of results.
    /// </summary>
    public string? PageToken { get; init; }
}
