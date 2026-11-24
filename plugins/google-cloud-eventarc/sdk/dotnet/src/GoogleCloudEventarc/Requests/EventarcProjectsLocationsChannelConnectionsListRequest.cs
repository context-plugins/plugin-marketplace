namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelConnectionsList operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelConnectionsListRequest
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
    /// The maximum number of channel connections to return on each page. Note: The service may send fewer responses.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The page token; provide the value from the <c>next_page_token</c> field in a previous <c>ListChannelConnections</c> call to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListChannelConnetions</c> match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
