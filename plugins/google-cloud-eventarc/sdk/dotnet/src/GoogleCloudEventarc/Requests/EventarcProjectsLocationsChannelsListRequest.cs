namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsChannelsList operation.
/// </summary>
public sealed record EventarcProjectsLocationsChannelsListRequest
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
    /// The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a <c>desc</c> suffix; for example: <c>name desc, channel_id</c>.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// The maximum number of channels to return on each page. Note: The service may send fewer.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The page token; provide the value from the <c>next_page_token</c> field in a previous <c>ListChannels</c> call to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListChannels</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
