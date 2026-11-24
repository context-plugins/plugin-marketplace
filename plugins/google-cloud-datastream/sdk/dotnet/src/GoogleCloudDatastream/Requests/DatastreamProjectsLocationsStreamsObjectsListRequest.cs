namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsStreamsObjectsList operation.
/// </summary>
public sealed record DatastreamProjectsLocationsStreamsObjectsListRequest
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
    /// Resource name segment (streamsId).
    /// </summary>
    public required string StreamsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token received from a previous <c>ListStreamObjectsRequest</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListStreamObjectsRequest</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
