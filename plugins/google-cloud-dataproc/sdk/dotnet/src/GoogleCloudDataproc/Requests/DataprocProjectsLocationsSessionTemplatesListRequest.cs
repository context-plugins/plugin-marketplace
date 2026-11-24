namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionTemplatesList operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionTemplatesListRequest
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
    /// Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ...
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
