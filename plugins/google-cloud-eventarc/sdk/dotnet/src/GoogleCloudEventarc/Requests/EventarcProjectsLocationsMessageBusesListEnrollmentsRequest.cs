namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsMessageBusesListEnrollments operation.
/// </summary>
public sealed record EventarcProjectsLocationsMessageBusesListEnrollmentsRequest
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
    /// Resource name segment (messageBusesId).
    /// </summary>
    public required string MessageBusesId { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return on each page. Note: The service may send fewer.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The page token; provide the value from the <c>next_page_token</c> field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
