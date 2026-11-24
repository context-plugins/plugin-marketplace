namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsFetchStaticIps operation.
/// </summary>
public sealed record DatastreamProjectsLocationsFetchStaticIpsRequest
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
    /// Optional. Maximum number of Ips to return, will likely not be specified.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListStaticIps</c> call. will likely not be specified.
    /// </summary>
    public string? PageToken { get; init; }
}
