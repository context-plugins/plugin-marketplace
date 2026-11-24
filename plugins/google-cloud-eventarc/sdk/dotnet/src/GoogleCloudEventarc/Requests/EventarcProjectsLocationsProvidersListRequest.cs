namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsProvidersList operation.
/// </summary>
public sealed record EventarcProjectsLocationsProvidersListRequest
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
    /// The filter field that the list request will filter on.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a <c>desc</c> suffix; for example: <c>name desc, _id</c>.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// The maximum number of providers to return on each page.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The page token; provide the value from the <c>next_page_token</c> field in a previous <c>ListProviders</c> call to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListProviders</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
