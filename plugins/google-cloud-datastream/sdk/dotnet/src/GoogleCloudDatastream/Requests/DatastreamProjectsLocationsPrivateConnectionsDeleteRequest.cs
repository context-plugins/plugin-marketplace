namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsPrivateConnectionsDelete operation.
/// </summary>
public sealed record DatastreamProjectsLocationsPrivateConnectionsDeleteRequest
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
    /// Resource name segment (privateConnectionsId).
    /// </summary>
    public required string PrivateConnectionsId { get; init; }

    /// <summary>
    /// Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.
    /// </summary>
    public bool? Force { get; init; }

    /// <summary>
    /// Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    /// </summary>
    public string? RequestId { get; init; }
}
