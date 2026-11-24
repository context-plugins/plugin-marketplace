namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsWorkflowTemplatesList operation.
/// </summary>
public sealed record DataprocProjectsLocationsWorkflowTemplatesListRequest
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
    /// Optional. The maximum number of results to return in each response.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The page token, returned by a previous call, to request the next page of results.
    /// </summary>
    public string? PageToken { get; init; }
}
