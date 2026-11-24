namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsList operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsListRequest
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
    /// Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time &lt; "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators.
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
