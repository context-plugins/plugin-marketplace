namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsMessageBusesList operation.
/// </summary>
public sealed record EventarcProjectsLocationsMessageBusesListRequest
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
    /// Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a <c>desc</c> suffix; for example: <c>name desc, update_time</c>.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return on each page. Note: The service may send fewer.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The page token; provide the value from the <c>next_page_token</c> field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
