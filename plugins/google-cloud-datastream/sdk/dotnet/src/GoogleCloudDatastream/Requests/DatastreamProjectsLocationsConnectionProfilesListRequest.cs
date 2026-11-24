namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsConnectionProfilesList operation.
/// </summary>
public sealed record DatastreamProjectsLocationsConnectionProfilesListRequest
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
    /// Optional. Filter request.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Order by fields for the result.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token received from a previous <c>ListConnectionProfiles</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListConnectionProfiles</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
